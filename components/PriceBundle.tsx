import { IBundleClass } from '@/typing'
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '500'],
  variable: '--font-open-sans'
})

const bundleLists: IBundleClass[] = [
  {
    title: 'Single',
    priceBundle: 75,
    priceNormal: 75,
    levels: ['Newbie']
  },
  {
    title: 'Double',
    priceBundle: 130,
    priceNormal: 150,
    levels: ['Newbie', 'Beginner']
  },
  {
    title: 'Triple',
    priceBundle: 225,
    priceNormal: 195,
    levels: ['Newbie', 'Beginner', 'Intermediate']
  },
  {
    title: 'Quadruple',
    priceBundle: 300,
    priceNormal: 225,
    levels: ['Newbie', 'Beginner', 'Intermediate', 'Advanced']
  }
]

const PriceBundle = () => {
  return (
    <section
      className={`${openSans.className} bg-white duration-300 hover:shadow-lg`}>
      <div className='flex w-full flex-col gap-3  p-3'>
        <h4 className='text-2xl font-bold text-[#2b77f2]'>Bundle</h4>
        <ul>
          {bundleLists.map((list) => (
            <li
              key={list.title}
              className='flex items-start justify-between py-1'>
              <div className='self-start'>
                <h3 className='font-bold text-[#2b77f2]'>{list.title}</h3>
                <p className='py-1 text-xs'>Levels:</p>
                <p className='text-xs'>
                  (
                  {list.levels.map((level, index) => (
                    <>
                      <span key={index}>{level}</span>
                      <span>{index < list.levels.length - 1 ? ', ' : ''}</span>
                    </>
                  ))}
                  )
                </p>
              </div>
              <div className='flex flex-col items-end'>
                <h3 className='text-xl font-bold text-[#2b77f2]'>
                  Rp{list.priceBundle}.000
                </h3>
                <h4 className='text-[0.6rem] text-red-500 line-through'>
                  Rp{list.priceNormal}.000
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PriceBundle
