import { createContext, useCallback, useContext, useEffect, useState } from "react"
import api from "../services/api"

type IRoles = 'manager' | 'admin'
interface IAuthData {
  token: string
  is_token_valid: string
  role: IRoles
}

interface IAuthContextData {
  authData: IAuthData
  signIn(email: string, password: string): Promise<void>
  signOut(): void
}

interface IResponseData {
  token: {
    token: string
  }
  roles: IRoles
}

const AuthContext = createContext({} as IAuthContextData)


const AuthProvider: React.FC<any> = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    const token = localStorage.getItem('@tourguard:token')
    const is_token_valid = localStorage.getItem('@tourguard:is_token_valid') ?? 'false'
    const role = localStorage.getItem('@tourguard:role') as IRoles
    if (role && token && is_token_valid === 'true') {
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`
      return {
        token: JSON.parse(token),
        is_token_valid: JSON.parse(is_token_valid),
        role: JSON.parse(role),
      }
    }
    return {} as IAuthData
  })

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const { data } = await api.post<IResponseData>('/login', {
        email,
        password,
      })

      const roles = data.roles

      const { token } = data.token
      const role = roles[0]
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      const userData = {
        is_token_valid: 'true',
        token,
        role: role as IRoles,
      }

      setAuthData(userData)

      localStorage.setItem('@tourguard:token', JSON.stringify(userData.token))
      localStorage.setItem('@tourguard:is_token_valid', userData.is_token_valid)
      localStorage.setItem('@tourguard:role', JSON.stringify(userData.role))
      return
    } catch (e: any) {
      console.error(e)
      throw new Error('Falha ao realizar login')
    }
  }, [])

  const signOut = useCallback(async () => {
    try {

      await api.post('/logout')
      localStorage.removeItem('@tourguard:token')
      localStorage.removeItem('@tourguard:is_token_valid')
      localStorage.removeItem('@tourguard:role')
      api.defaults.headers.common['Authorization'] = ''
      
      setAuthData({} as IAuthData)
    } catch (e: any) {
      console.error(e)
      throw new Error('Falha ao realizar logout')
    }
  }, [])

  useEffect(() => {
    let { token, is_token_valid, role } = authData

    if (!role || !token || is_token_valid === 'false') {
      signOut()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut }}>{children}</AuthContext.Provider>
  )
}

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('You must use useAuth inside an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
