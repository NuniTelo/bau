import Link from 'next/link'
import { getTrimmedString } from '../../utils/helpers'
import Image from '../Image'

const DisplaySmall = ({ link, title, subtitle, imageSrc }) =>  (
  <div className="lg:w-flex-fourth bg-light
  px-12 pt-11 pb-2 lg:p-7 lg:pb-0
  hover:bg-light-200 lg:mb-0 mb-7">
    <Link href={link}>
      <a aria-label={title}>
        <div className="flex flex-column justify-center items-center h-32 mt-8">
          <Image alt={title} src={imageSrc} className="w-3/5" />
        </div>
        <div className="">
          <p className="text-xl font-semibold mb-2 mt-24 text-center">{title}</p>
          <p className="text-xs font-semibold mb-4 text-center">Baufixit</p>
        </div>
      </a>
    </Link>
  </div>
)

export default DisplaySmall