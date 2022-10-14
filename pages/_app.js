import 'bootstrap/dist/css/bootstrap.min.css';
//import Layout from '../components/Layout'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }) {
  return (
    <div>
  {// <Layout>
  //   <SWRConfig value={{ fetcher: (...args) => fetch(...args).then((res) => res.json()) }}>
     <Component {...pageProps} />
  //   </SWRConfig> 
  // </Layout>
}
  </div>
  )
}

export default MyApp
