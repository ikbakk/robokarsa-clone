import { IProjectClass } from '@/typing'
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '500'],
  variable: '--font-open-sans'
})

const projectClassLists: IProjectClass[] = [
  {
    total: 2,
    price: 140,
    discount: 170
  },
  {
    total: 4,
    price: 235,
    discount: 340
  },
  {
    total: 6,
    price: 320,
    discount: 510
  },
  {
    total: 11,
    price: 425,
    discount: 935
  }
]

const PriceCardProjectClass = () => {
  return (
    <section
      className={`${openSans.className} bg-white duration-300 hover:shadow-lg`}>
      <div className='flex max-w-sm flex-col gap-3  p-5'>
        <h4 className='text-2xl font-bold text-[#2b77f2]'>Project Class</h4>
        <div className=' flex flex-col gap-3 text-[#212529]'>
          <ul>
            {projectClassLists.map((list) => (
              <li
                key={list.total}
                className='flex items-center justify-between'>
                <h3 className='text-[#212529]'>{list.total} Project :</h3>
                <hgroup className='flex items-center gap-2 py-1'>
                  <h4 className='text-[0.7rem] font-bold text-red-500 line-through'>
                    Rp{list.discount}.000
                  </h4>
                  <h3 className='text-xl font-bold text-[#2b77f2]'>
                    Rp{list.price}.000
                  </h3>
                </hgroup>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PriceCardProjectClass
