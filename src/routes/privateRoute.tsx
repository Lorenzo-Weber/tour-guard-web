import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Hooks/AuthContext'

type IRoles = 'admin' | 'manager'

const PrivateRoute: React.FC<{ roles: IRoles, children: JSX.Element }> = ({ roles, children }) => {
  const { authData } = useAuth()
  if (!!authData?.token && !!authData?.role && roles.includes(authData?.role)) return children
  else return <Navigate to="/login" />
}

export default PrivateRoute
