import Head from 'next/head'
import '../styles/globals.css'

export const metadata = {
  author: "Where2Be",
  url: "Where2Be.app",
  title: "Where2Be | Your central school events hub",
  description:
    "Navigate your university experience with ease - Discover, Plan, and Connect with events around campus, all from your mobile device",
  image: "https://i.imgur.com/2iOelx1.png",
  robots: "all",
  keywords: "Where2Be, School, Events"
};

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
        <meta property="image" content={metadata.image} />
        <meta name="keywords" content="University, Events, Where2Be" />
      </Head>
      <body>{children}</body>
    </html>
  )
}