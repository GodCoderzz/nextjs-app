import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoadingBar from 'react-top-loading-bar'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
  
  
  }, [router.query])
  
  return <>
  <Navbar/>
  <LoadingBar
        color='#f11946'
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
   <Component {...pageProps} />
   <Footer/>
   </>
}

export default MyApp
