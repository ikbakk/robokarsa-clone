import { IPriceList } from '@/typing'
import { Open_Sans } from '@next/font/google'
import { BsCheck2All } from 'react-icons/bs'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '500'],
  variable: '--font-open-sans'
})

interface IProps {
  priceList: IPriceList
}

const PriceCard = ({ priceList }: IProps) => {
  const { feature, price, title } = priceList
  return (
    <section
      className={`${openSans.className} flex max-w-sm flex-col gap-3 bg-white  p-5 duration-300 hover:shadow-lg`}>
      <div className='flex h-[20%] items-center '>
        <p className='text-xl text-[#212529]'>
          {title.map((item, index) => (
            <span key={index}>
              {item}
              {index < title.length - 1 ? ' / ' : ''}
            </span>
          ))}
        </p>
      </div>
      <h2 className='text-3xl font-bold text-[#2b77f2]'>
        {price}{' '}
        <span className='text-xl font-normal text-[#212529]'>
          {title[0] === 'Expert' ? '/ project' : '/ level'}
        </span>
      </h2>
      <div className='flex w-full justify-center py-4'>
        <button className='bg-[#2b77f2] py-4 px-10 text-white duration-200 hover:bg-[#2b77f2]/90 active:scale-95'>
          Coba Gratis
        </button>
      </div>
      <div className=' flex flex-col gap-4 text-[#212529]'>
        <p className='font-bold text-[#2b77f2]'>Feature</p>
        <ul className='flex flex-col gap-3'>
          {feature.map((item, index) => (
            <li key={index} className='flex flex-row items-start gap-3 py-1'>
              <figure className='pt-1'>
                <BsCheck2All color='#2b77f2' size={18} />
              </figure>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PriceCard
