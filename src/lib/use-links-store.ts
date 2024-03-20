import { create } from "zustand"
import toast from 'react-hot-toast'
import { AppLink, getAllLinksFromFirebase, getMetrics } from "./short-url"
import { produce } from "immer"

interface LinkStoreState {
  links: AppLink[]
  status: 'idle' | 'loading' | 'error'
  fetchAllLinks: () => Promise<void>
  fetchLinkMetrics: (link: string) => Promise<void>
  addLink: (link: AppLink) => void
}
export const useLinksStore = create<LinkStoreState>((set, get) => ({
  links: [],
  status: 'idle',
  fetchAllLinks: async () => {
    try {
      set({ status: 'loading' })
      const { success, data, error } = await getAllLinksFromFirebase()
      if (success) {
        set({ links: data, status: 'idle' })
      } else {
        toast.error(error!)
        set({ status: 'idle' })
      }
    } catch (error) {
      toast.error('Something went wrong')
      set({ status: 'idle' })
    }
  },
  fetchLinkMetrics: async (linkId: string) => {
    const link = get().links.find((l) => l.id === linkId)
    if (!link) return
    const id = toast.loading('Fetching metrics...')
    const { data, error } = await getMetrics(linkId)
    if (error) {
      console.error(error)
      toast.dismiss(id)
      toast.error((error as any)?.message || 'Something went wrong')
      return
    }
    set(produce((state: LinkStoreState) => {
      const index = state.links.findIndex((l) => l.id === linkId)
      state.links[index].clicks = data.total_clicks
    }))
    toast.dismiss(id)
  },

  addLink: (link: AppLink) => {
    set(produce((state: LinkStoreState) => {
      state.links.unshift(link)
    }))
  }
}))
