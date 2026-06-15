import {Routes, Route} from 'react-router-dom'
import {SignedIn, SignedOut,RedirectToSignIn} from '@clerk/clerk-react'
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import DashboardPage from './pages/DashboardPage'
import PricingPage from './pages/PricingPage'


function ProtectedRoute({children}) {
  return(
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut><RedirectToSignIn/></SignedOut>
    </>
  )
}

function App() {
  return (
   
  )
}

export default App