import { Link } from "react-router-dom"
import { AppLink } from "../../lib/short-url"
import { handleCopyUrl, handleDownloadQrCode } from "../../lib/link-utils"


type DashboardViewProps = {
  links: AppLink[]
}
export const DesktopDashboard = ({ links }: DashboardViewProps) => {


  return (
    <div className="hidden md:flex flex-col mt-8">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-neutral-200  md:rounded-lg">

            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-neutral-100">
                <tr>
                  <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-neutral-500">
                    <span>Short Url</span>
                  </th>

                  <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    Clicks
                  </th>

                  <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <span className="sr-only">Copy URL</span>
                  </th>

                  <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <span className="sr-only">Download QR Code</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200 ">
                {links.map((link) => (
                  <tr key={link.id}>
                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <div className="flex flex-col gap-2 max-w-[30em]">
                        <Link to={link.detailsUrl} className="font-semibold text-primary-400 truncate">
                          {link.link}
                        </Link>
                        <p className="text-sm font-xs text-neutral-400 truncate">
                          {link.long_url}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <Link to={link.detailsUrl} className="font-medium text-sm ml-1 text-neutral-400 my-8 flex items-center gap-2">
                        View
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <button className="flex items-center gap-2" onClick={() => handleCopyUrl(link.link)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-neutral-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                        </svg>
                        <span className="text-xs text-neutral-400">Copy URL</span>
                      </button>
                    </td>

                    <td className="px-1 py-4 text-sm whitespace-nowrap">
                      <button className="flex items-center gap-2" onClick={() => handleDownloadQrCode(link.qr_code)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                        </svg>
                        <span className="text-xs text-neutral-400">Download QR code</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div >
    </div >
  )
}
