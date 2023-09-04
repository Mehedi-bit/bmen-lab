import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import store from '../redux/store'
import { Provider } from 'react-redux'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['200', '400', '500', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </main>
  )
}
