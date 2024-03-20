import { Link, useNavigate, useParams } from "react-router-dom"
import { useLinksStore } from "../lib/use-links-store"
import { handleCopyUrl, handleDownloadQrCode } from "../lib/link-utils"
import { linkToDBId } from "../lib/short-url"
import { useEffect } from "react"
import { useRequireAuth } from "../lib/use-require-auth"

export const LinkDetails = () => {
  useRequireAuth()

  const linkId = useParams<{ linkId: string }>().linkId
  const [link, fetchMetrics] = useLinksStore(s => [s.links.find(l => linkToDBId(l.id) === (linkId)), s.fetchLinkMetrics])
  const navigate = useNavigate()

  useEffect(() => {
    if (!link) {
      navigate('/dashboard', {
        replace: true
      })
    } else {
      fetchMetrics(link.id)
    }
  }, [link])

  if (!link) return null

  return (
    <div className="container mx-auto px-2 md:px-0 pt-20">
      <Link to="/dashboard" className="mb-6 text-primary-400 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Back to Links
      </Link>

      <div className=" px-4 md:px-10 py-6 md:py-10 border border-neutral-200 rounded-md overflow-x-scroll">
        <button
          onClick={() => handleCopyUrl(link.link)}
          className="flex items-center gap-2 ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-neutral-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
          </svg>
          <span className="font-semibold text-xs text-primary-400">Copy URL</span>
        </button>
        <h2 className="my-6 text-primary-400 text-3xl md:text-5xl font-medium">
          {link.clicks}
          <span className="font-medium text-sm inline-block ml-1 md:ml-2 text-neutral-400">clicks</span>
        </h2>


        <div className="md:flex justify-between items-center">
          <div>
            <div>
              <p className="text-neutral-500 text-sm font-semibold">Short URL</p>
              <div className="flex items-center gap-4 w-fit my-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                <a href={link.link} target="_blank" className="text-primary-400 text-sm font-medium text-clip">
                  {link.link}
                </a>
              </div>
            </div>


            <div className="mt-8 md:mt-12">
              <p className="text-neutral-500 text-sm font-semibold">Original URL</p>
              <div className="flex items-center gap-4 md:w-fit my-2 overflow-hidden w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                <a href={link.long_url} target="_blank" className="text-neutral-500 text-sm font-medium text-ellipsis line-clamp-4 w-full  md:w-4/5">
                  {link.long_url}
                </a>
              </div>
            </div>
          </div>



          <div className="flex flex-col items-center">
            <div className="border border-neutral-400 rounded-md p-2 w-fit mt-8 md:mt-0">
              <div className="w-40 h-40  md:w-96 md:h-96">
                <img src={link.qr_code} alt="QR code" className="w-full h-full" />
              </div>
            </div>
            <button onClick={() => handleDownloadQrCode(link.qr_code)} className="flex items-center gap-2 mt-4">
              <span className="font-semibold text-primary-400">Download QR code</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
