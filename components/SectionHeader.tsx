import { Amatic_SC, Open_Sans } from '@next/font/google'

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700']
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '500'],
  variable: '--font-open-sans'
})

interface IProps {
  title: string
  titleSpan: string
  subtitle: string
}

const SectionHeader = ({ title, titleSpan, subtitle }: IProps) => {
  return (
    <header className='flex flex-col gap-3 text-center'>
      <h2 className={`${amatic.className} text-3xl text-[#212529] md:text-5xl`}>
        Biaya <span className='text-[#2b77f2]'>Kelas</span> kami
      </h2>
      <p
        className={`${openSans.className} text-xs uppercase tracking-widest text-[#7f7f90]`}>
        Sekilas info rincian biaya
      </p>
    </header>
  )
}

export default SectionHeader
