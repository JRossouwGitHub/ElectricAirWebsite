import Layout from '../components/Layout'
import MUIThemeProvider from '../components/MUIThemeProvider'
import '../styles/global.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
      <MUIThemeProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </MUIThemeProvider>
  )
}