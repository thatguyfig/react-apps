import '../styles/index.css'

import { Auth0Provider } from '@auth0/auth0-react'

export default function MyApp({ Component, pageProps }) {
    return (

        <Auth0Provider
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
        >
            <main>
                <Component {...pageProps} />
            </main>
        </Auth0Provider>

    ) 
}