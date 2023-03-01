import { Amatic_SC, Open_Sans } from '@next/font/google'
import PriceCard from './PriceCard'
import { IPriceList } from '@/typing'
import PriceCardProjectClass from './PriceCardProjectClass'
import PriceBundle from './PriceBundle'

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700']
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '500'],
  variable: '--font-open-sans'
})

const priceLists: IPriceList[] = [
  {
    id: 1,
    title: ['Newbie', 'Beginner', 'Intermediate', 'Advanced'],
    type: 'level',
    price: 'Rp75.000',
    feature: [
      '6 Pertemuan',
      '± 90 menit/pertemuan',
      'Peralatan robotik akan dipinjamkan',
      '2 Siswa per kelas',
      'Sertifikat apabila telah menyelesaikan level'
    ]
  },
  {
    id: 2,
    title: ['Expert'],
    type: 'project',
    price: 'Rp85.000',
    feature: [
      '6 Pertemuan',
      '± 90 menit/pertemuan',
      'Peralatan robotik akan dipinjamkan',
      'Sertifikat apabila telah menyelesaikan level',
      'Siswa bebas memilih salah satu project yang ingin dibuat'
    ]
  }
]

const Price = () => {
  return (
    <section
      id='biaya'
      className='flex flex-col items-center gap-10 bg-gray-200 px-5 py-10 pt-20 md:px-28'>
      <header className='flex flex-col gap-3 text-center'>
        <h2
          className={`${amatic.className} text-3xl text-[#212529] md:text-5xl`}>
          Biaya <span className='text-[#2b77f2]'>Kelas</span> kami
        </h2>
        <p
          className={`${openSans.className} text-xs uppercase tracking-widest text-[#7f7f90]`}>
          Sekilas info rincian biaya
        </p>
      </header>
      <section className=' grid grid-cols-1 gap-5 md:grid-cols-3'>
        {priceLists.map((priceList) => (
          <PriceCard key={priceList.id} priceList={priceList} />
        ))}
        <div className='flex flex-col gap-2'>
          <PriceBundle />
          <PriceCardProjectClass />
        </div>
      </section>
    </section>
  )
}

export default Price
