import React from 'react'
import { AuthProvider } from './AuthContext'

const Providers: React.FC<any> = ({ children }) => {
  return (
    <AuthProvider>{children}</AuthProvider>
  )
}

export default Providers
