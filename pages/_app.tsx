import type { AppProps } from 'next/app'
import '../styles/app.sass'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
