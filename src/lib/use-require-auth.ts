import { getAuth } from "firebase/auth"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const useRequireAuth = () => {

  const location = useLocation()

  const navigate = useNavigate()

  useEffect(() => {

    getAuth().authStateReady().then(() => {
      if (!getAuth().currentUser) {
        if (location.pathname.includes('auth')) {
          return
        }
        navigate('/auth/login', {
          replace: true
        })
      }
    })

  }, [])
}
