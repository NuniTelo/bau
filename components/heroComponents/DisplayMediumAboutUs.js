const DisaplyMediumContact = ({ imageSrc, title, subtitle, link, subtitleOther, subt2, subt3 }) => {
  return (
    <div className="
    mb-4 lg:mb-0
    p-8 pb-0 hover:bg-light-200">
      {/* <Link href={`${link}`}> */}
        <a aria-label={title}>
          {/* <div className="flex flex-column justify-center items-center h-56">  */}
            {/* <Image src={imageSrc} alt={title} className="w-3/5" /> */}
          {/* </div>  */}
          <div className="mb-8">
            <p className="text-xl font-semibold mb-1">{title}</p>
            <p className="text-l  text-gray-700">{subtitle}</p>
            <p className="text-l  text-gray-700">{subt2}</p>
            <p className="text-l  text-gray-700">{subt3}</p>
            <p className="text-l  text-gray-700">{subtitleOther}</p>
          </div>
        </a>
      {/* </Link> */}
    </div>
  )
}

export default DisaplyMediumContact;