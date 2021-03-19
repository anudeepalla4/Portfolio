import 'bootstrap/dist/css/bootstrap.css';
import '../styles/base.scss'
import Layout from '../Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
