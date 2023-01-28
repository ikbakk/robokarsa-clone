import About from '@/components/About'
import Class from '@/components/Class'
import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import NavProvider from '@/context/navcontext'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>RoboKarsa</title>
        <meta name='description' content='Satu-satunya kelas Robotik di NTB.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content='/assets/ogImage2.jpg' />
        <meta property='og:title' content='RoboKarsa' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main>
        <Hero />
        <About />
        <WhyUs />
        <NavProvider>
          <Class />
        </NavProvider>
      </main>
    </>
  )
}
