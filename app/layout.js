import '../styles/globals.css'

export const metadata = {
  title: 'Where2Be | Find school events',
  description: 'A central hub for all your school events at UCSD and UIUC.',
  robots: "all",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://where2be.app" />
        <meta property="og:title" content="Where2Be" />
        <meta
          property="og:description"
          content="A central hub for all your school events at UCSD and UIUC"
        />
        <meta
          property="og:image"
          content="../assets/w2blogo.png"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}