import Link from 'next/link'
import Image from '../Image'

const DisplaySmallContact = ({ link, title, subtitle, imageSrc, downText}) =>  (
  <div className="lg:w-flex-fourth
  px-12 pt-11 pb-2 lg:p-1 lg:pb-2
  hover:bg-light-200 lg:mb-1 mb-10">
    <Link href={link}>
      <a aria-label={title}>
        <div className="flex flex-column justify-center items-center h-32 mt-8">
          <Image alt={title} src={imageSrc} className="w-3/5" />
        </div>
        <div className="">
          <p className="text-xl font-semibold mb-2 mt-24 text-center">{title}</p>
          <p className="text-xs font-semibold mb-4 text-center">{downText}</p>
        </div>
      </a>
    </Link>
  </div>
)

export default DisplaySmallContact