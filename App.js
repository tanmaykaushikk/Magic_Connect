import React from 'react'
import Navigation from './src/navigation/Navigation'
import { AuthProvider } from './src/hooks/useAuth'
import HomePage from './src/screens/HomePage'
import Header from './src/components/Header'
import Cards from './src/components/Cards'
const App = () => {
  return (
    <>
      <AuthProvider>
        {/* <SplashScreen/> */}
        <Navigation />
        {/* <Header/> */}
        {/* <Cards/> */}

      </AuthProvider>
    </>
  )
}

export default App
