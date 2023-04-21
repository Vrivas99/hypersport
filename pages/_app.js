import StateWrapper from '@/components/StateWrapper'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <StateWrapper>
    <Component {...pageProps} />
  </StateWrapper> 
  )
}
