import axios, { AxiosError } from 'axios'
import { getFirestore, collection, setDoc, doc, getDocs, query, orderBy, where } from 'firebase/firestore'
import { getFirebaseApp } from './firebase-app'
import { getAuth } from 'firebase/auth'

const apiKey = import.meta.env.VITE_BITLY_TOKEN
const group = import.meta.env.VITE_BITLY_GROUP


export const db = getFirestore(getFirebaseApp())

export const linkToDBId = (link: string) => link.replace(/\//g, '-')


export const shortenUrl = async (url: string) => {
  try {
    const response = await axios.post(`https://api-ssl.bitly.com/v4/shorten`,
      {
        "group_guid": group,
        "long_url": url
      }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })

    await getAuth().authStateReady()
    const linkData = transformLink({
      ...response.data,
      user_id: getAuth(getFirebaseApp()).currentUser?.uid
    })

    await setDoc(doc(db, 'links', linkToDBId(linkData.id)), linkData)

    return {
      success: true, data: linkData
    }

  } catch (error) {
    const err = error as AxiosError
    if (err.response) {
      return { success: false, error: err.response.data }
    }
    console.error(error)
    return {
      success: false,
      error: 'Something went wrong'
    }
  }
}

export const getAllLinksFromFirebase = async () => {
  try {
    await getAuth().authStateReady()

    const q = query(collection(db, 'links'), where('user_id', '==', getAuth(getFirebaseApp()).currentUser?.uid), orderBy('created_at', 'desc'))
    const snapshot = await getDocs(q)
    const links: AppLink[] = []

    snapshot.forEach((doc) => {
      links.push(transformLink(doc.data()))
    })
    return {
      success: true, data: links
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      error: 'Something went wrong'
    }
  }
}


export const getMetrics = async (linkId: string) => {
  try {
    const response = await axios.get(`https://api-ssl.bitly.com/v4/bitlinks/${linkId}/clicks/summary?unit=month&units=-1`,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      })

    await setDoc(doc(db, 'links', linkToDBId(linkId)), {
      clicks: response.data.total_clicks
    }, {
      merge: true
    })

    return {
      success: true, data: response.data
    }

  } catch (error) {
    const err = error as AxiosError
    if (err.response) {
      return { success: false, error: err.response.data }
    }
    console.error(error)
    return {
      success: false,
      error: 'Something went wrong'
    }
  }
}


export const transformLink = (link: any) => {
  return {
    user_id: link.user_id,
    id: link.id,
    long_url: link.long_url,
    link: link.link,
    created_at: link.created_at,
    qr_code: link.qr_code ?? `https://api.qrserver.com/v1/create-qr-code/?data=${link.link}`,
    clicks: link.clicks ?? 0,
    detailsUrl: `/dashboard/links/${linkToDBId(link.id)}`,
  }
}

export type AppLink = ReturnType<typeof transformLink>
