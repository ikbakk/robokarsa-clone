import { BsCashCoin, BsBookHalf } from 'react-icons/bs'
import { FiActivity } from 'react-icons/fi'
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans'
})

const WhyUs = () => {
  const whyUs = [
    {
      icon: <BsCashCoin color='#2b77f2' size={48} />,
      title: 'Biaya terjangkau',
      description:
        'Dengan penyesuaian yang dilakukan oleh RoboKarsa, siswa dapat belajar dengan leluasa, orangtua tidak perlu risau perihal biaya.'
    },
    {
      icon: <FiActivity color='#2b77f2' size={48} />,
      title: 'Beragam project',
      description:
        'Beragam project yang tersedia di RoboKarsa membuat siswa tidak akan mudah bosan dan jenuh ketika belajar.'
    },
    {
      icon: <BsBookHalf color='#2b77f2' size={48} />,
      title: 'Mudah dimengerti',
      description:
        'Siswa tak harus bergelar S1 terlebih dahulu karena materi yang dibawakan akan disesuaikan dengan tingkat pemahaman siswa..'
    }
  ]
  return (
    <section
      className={`${openSans.className} flex h-fit flex-col gap-5 bg-gray-200 py-16 px-10 md:flex-row md:px-28`}>
      <article className='flex flex-col gap-5 bg-[#2b77f2] p-5 text-white md:basis-[30%] md:p-10'>
        <h2 className='text-3xl font-bold md:text-4xl'>
          Mengapa memilih Robokarsa?
        </h2>
        <p className='text-justify md:text-left'>
          Di Indonesia, kami hanyalah satu dari banyak tempat yang menawarkan
          kursus Robotik dan pemrograman untuk anak. Namun di NTB, terutama di
          Kota Mataram, kami menjadi satu-satunya tempat yang menyediakan arena
          bermain bagi anak yang ingin menyalurkan bakatnya di bidang teknologi.
        </p>
      </article>
      <div className='flex flex-col justify-between gap-5 md:basis-[70%] md:flex-row'>
        {whyUs.map((item, index) => {
          return (
            <article
              className='flex flex-col items-center gap-5 bg-white p-5 duration-200 hover:scale-105'
              key={index}>
              <figure className='flex items-center justify-center rounded-full bg-[#123ece]/10 p-5'>
                {item.icon}
              </figure>
              <h3 className='text-center text-2xl '>{item.title}</h3>
              <p className='text-justify text-black/80 md:p-5 md:text-center'>
                {item.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default WhyUs
