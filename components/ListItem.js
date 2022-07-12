import React from 'react'
import Link from 'next/link'
import Image from './Image'

const ListItem = ({ link, title, imageSrc, brand }) =>  (
  <div className="
    w-100
    md:w-1/2
    lg:w-1/4
    p1 sm:p-4
    
  ">
    <Link href={`${link}`}>
      <a aria-label={title}>
        <div className="h-72 flex justify-center items-center hover:bg-light-200">
          <div className="flex flex-column justify-center items-center">
            <Image alt={title} src={imageSrc} className="w-3/5" />
          </div>
        </div>
      </a>
    </Link>
    <div>
      <p className="m-4 text-center text-lg font-semibold mb-1">{title}</p>
      <p className="text-center text-gray-700 mb-4">{`${brand}`}</p>
    </div>
  </div>
)

export default ListItem