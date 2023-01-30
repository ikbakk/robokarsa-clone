import { Amatic_SC, Open_Sans } from '@next/font/google'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700']
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '500'],
  variable: '--font-open-sans'
})

const gallery = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Gallery = () => {
  return (
    <section
      id='galeri'
      className='flex flex-col gap-10 bg-white px-5 py-10 pt-20 md:px-28'>
      <header className='flex flex-col gap-3 text-center'>
        <h2
          className={`${amatic.className} text-3xl text-[#212529] md:text-5xl`}>
          Buku <span className='text-[#2b77f2]'>album</span>
        </h2>
        <p
          className={`${openSans.className} text-xs uppercase tracking-widest text-[#7f7f90]`}>
          Sekilas memori kami
        </p>
      </header>
      <section className='flex w-full justify-center'>
        <Carousel
          showIndicators
          showArrows
          stopOnHover
          swipeable
          autoPlay
          centerMode
          centerSlidePercentage={40}
          infiniteLoop
          width={800}
          className=''>
          {gallery.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  src={`/assets/gallery/gallery-${item}.jpg`}
                  alt='image carousel'
                  width='800'
                  height='600'
                />
              </div>
            )
          })}
        </Carousel>
      </section>
    </section>
  )
}

export default Gallery
