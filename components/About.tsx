import { Amatic_SC, Open_Sans } from '@next/font/google'
import { BsCheck2All } from 'react-icons/bs'
import Image from 'next/image'

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700']
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans'
})

const About = () => {
  return (
    <section
      id='tentang'
      className='flex flex-col items-center justify-center gap-8 bg-white py-20 md:h-fit md:px-28'>
      <header className='flex flex-col gap-3 text-center'>
        <h2
          className={`${amatic.className} text-3xl text-[#212529] md:text-5xl`}>
          Sekilas cerita <span className='text-[#2b77f2]'>tentang kami</span>
        </h2>
        <p
          className={`${openSans.className} text-xs uppercase tracking-widest text-[#7f7f90]`}>
          Mengapa kami ada?
        </p>
      </header>
      <div className='flex h-full flex-col-reverse gap-5 md:flex-row'>
        <figure
          style={{ backgroundImage: "url('/assets/about-robokarsa-3.jpg')" }}
          className='relative w-full overflow-hidden md:basis-[55%]'></figure>

        <article
          className={`${openSans.className} flex flex-col gap-5 px-10 text-[#212529] md:basis-[45%]`}>
          <p>
            Jumlah sekolah di pulau Jawa? Banyak. Jumlah layanan kursus robotik
            di pulau Jawa? Banyak juga. Sementara itu, jumlah sekolah di pulau
            NTB? Banyak. Sedangkan, jumlah layanan kursus robotik di pulau NTB?
            Tidak ada.
          </p>
          <p>Oleh karena itulah RoboKarsa hadir di NTB.</p>
          <ul className='flex flex-col gap-1'>
            <li className='flex items-center gap-3'>
              <BsCheck2All color='#2b77f2' size={22} />
              <p>Biaya terjangkau.</p>
            </li>
            <li className='flex items-center gap-3'>
              <BsCheck2All color='#2b77f2' size={22} />
              <p>Beragam project.</p>
            </li>
            <li className='flex items-center gap-3'>
              <BsCheck2All color='#2b77f2' size={22} />
              <p>Pilihan materi yang fleksibel.</p>
            </li>
            <li className='flex items-center gap-3'>
              <BsCheck2All color='#2b77f2' size={22} />
              <p>Materi lebih mudah dipahami.</p>
            </li>
          </ul>
          <p>
            RoboKarsa hadir untuk mewadahi anak yang membutuhkan kegiatan
            positif di luar akademik sekolah namun disaat yang bersaamaan, juga
            membantu mengembangkan dan mengasah logika dan hardskill anak di
            bidang teknologi.
          </p>
          <figure className='relative w-full overflow-hidden'>
            <Image
              className='object-scale-down'
              src='/assets/about-robokarsa-2.jpg'
              width={768}
              height={1025}
              alt='about image 2'
            />
          </figure>
        </article>
      </div>
    </section>
  )
}

export default About
