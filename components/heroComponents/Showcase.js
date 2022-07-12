import Image from '../Image'

const Showcase = ({ imageSrc }) => {
  return (
    <div className="z-10">
      <Image src={imageSrc} className="w-50 h-80" alt="Showcase item" />
    </div>
  )
}

export default Showcase