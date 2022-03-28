import '../styles/globals.css'
import Navbar from '../src/components/Navbar'
import { AuthProvider } from '../src/contexts/auth'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
