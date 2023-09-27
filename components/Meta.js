import Head from 'next/head'

const Meta = ({title, description}) => {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Jacques Rossouw | PalmTop" />
            <meta name="description" content={description} />
            <link rel="shortcut icon" href='/EA favicon.ico' />
            <title>Electric Air | {title}</title>
            <script type="text/javascript" src="https://analytics.palmtop.co.nz/js/bundle/analytics.min.1.0.0.js"></script>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Air Compressor Sales & Service',
    description: 'Electric Air is a New Zealand, family owned business based in Hamilton, who have been delivering compressed air and pnuematic solutions to customers in the Waikato.'
}

export default Meta
