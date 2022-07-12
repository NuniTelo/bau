import { Button } from '../';
import { useRouter } from 'next/router'

const CenterContact = ({ price, title, link }) => {
  const router = useRouter()
  function navigate() {
    router.push(link)
  }
  return (
    <div>
      <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none mb-4 content-center">{title}</p>
      {/* {/* <p className="py-6 tracking-wide font-semibold">Email: <span> sales@baufixit.com </span></p> */}
      {/* <p className="py-6 tracking-wide font-semibold">Phone: <span> +355 68 204 4040</span></p> */} 

    </div>
  )
}

export default CenterContact