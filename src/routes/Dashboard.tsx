import { Link, useNavigate } from "react-router-dom";
import { DesktopDashboard } from "../components/common/desktop-dashboard";
import { MobileDashboard } from "../components/common/mobile-dashboard";
import { useEffect } from "react";
import { useLinksStore } from "../lib/use-links-store";
import { getAuth, signOut } from "firebase/auth";
import { useRequireAuth } from "../lib/use-require-auth";


export const Dashboard = () => {
  useRequireAuth()

  const navigate = useNavigate()
  const { links, fetchAllLinks } = useLinksStore((s) => {
    return {
      links: s.links,
      fetchAllLinks: s.fetchAllLinks,
      status: s.status
    }
  })

  useEffect(() => {
    getAuth().authStateReady().then(() => {
      if (getAuth().currentUser) {
        fetchAllLinks()
      }
    })
  }, [])


  return (
    <main className="min-h-screen w-screen bg-neutral-white pt-20 md:pt-32 px-4 md:px-0  container mx-auto">
      <section className="container px-4 mx-auto">
        <button onClick={() => {
          signOut(getAuth()).then(() => {
            navigate('/auth/login', {
              replace: true
            })
          })
        }} className="font-medium text-primary-400 underline inline-block ml-auto p-2">
          Logout
        </button>
        <div className="flex flex-col md:flex-row md:items-center gap-6 mt-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-neutral-100 w-8 h-8 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-neutral-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
              </span>
              <h2 className="text-xl text-primary-400 font-semibold tracking-wide">My Links</h2>
            </div>
            <p className="mt-1 text-sm text-neutral-500">These are the links you have created</p>
          </div>
          <Link to="/dashboard/links/create"
            className="text-primary-100 bg-primary-400 rounded-md font-medium text-sm mt-2 md:mt-0 md:ml-auto flex items-center justify-center gap-4 px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Create Link
          </Link>

        </div>

        <DesktopDashboard links={links} />
        <MobileDashboard links={links} />
      </section>
    </main>
  );
};

