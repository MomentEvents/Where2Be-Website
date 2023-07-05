import Head from 'next/head'
import '../styles/globals.css'

export const metadata = {
  title: 'Where2Be | Find school events',
  description: 'A central hub for all your school events across multiple institutions.',
  image: 'https://i.imgur.com/2iOelx1.png',
  robots: "all",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href="https://where2be.app" />
        <meta property="og:url" content="https://where2be.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://where2be.app" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={metadata.image} />
      </Head>
      <body>{children}</body>
    </html>
  )
}