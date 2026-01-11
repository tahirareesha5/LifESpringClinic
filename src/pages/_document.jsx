import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="LifeSpring Health Clinic - Your trusted partner in preventive care, family medicine, and chronic disease management. Experience warm, compassionate healthcare for your entire family." />
        <meta name="keywords" content="healthcare, family medicine, preventive care, chronic disease, wellness, health clinic, medical center" />
        <meta name="author" content="LifeSpring Health Clinic" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
