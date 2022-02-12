import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Elegance</title>
        <link 
          rel="shortcut icon" 
          href="/images/png/elegance.png" 
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap"
          rel="stylesheet"
        />
        </Head>
        <Navbar />
        <main>{children}</main>
    </>
  )
}