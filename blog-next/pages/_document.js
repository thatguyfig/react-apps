import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Scripts from '../components/scripts'
export default class MyDocument extends NextDocument {

    static getInitialProps(ctx) {
        return NextDocument.getInitialProps(ctx)
    }

    render() {

        const meta = {
            title: 'Next.js Blog Starter Kit',
            description: 'Clone and deploy your own Next.js portfolio in minutes'
        }

        return (
            <Html lang="en" className='bg-white text-gray-700 antialised'>
                <Head>
                    <meta charSet='utf-8' />
                    <meta name="robots" content="follow, index" />
                    <meta name="description" content={meta.description} />
                </Head>
                <body>
                    <Main />
                    <Scripts />
                    <NextScript />
                </body>
            </Html>
        )
    }
}