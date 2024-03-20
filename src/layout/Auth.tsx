import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return <div className="md:flex md:flex-row min-h-screen pt-24 px-4">
    <main className='md:w-1/3 md:mx-auto'>
      <Outlet />
    </main>
  </div>
}
