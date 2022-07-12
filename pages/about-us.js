import Head from 'next/head'
import { CenterContact, Tag, DisplayMediumAboutUs } from '../components'
import { fetchInventory } from '../utils/inventoryProvider'

const Home = ({ inventoryData = [], categories: categoryData = [] }) => {
  const inventory = inventoryData.slice(0, 15)
  const categories = categoryData.slice(0, 2)

  return (
    <>
      <div className="w-full">
        <Head>
          <title>Baufixit - About Us</title>
          <meta property="og:title" content="Baufixit" key="title" />
        </Head>
       
          <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col content-center ">
            <CenterContact
              price="200"
              title={ `About Us` }
              link={`https://dl.dropboxusercontent.com/s/rrgbtpld517yaxv/Katalogu%20OK%20pdf%20%282%29.pdf?dl=0`}
            />
        </div>
      </div>
      <div className="
        lg:my-8 lg:grid-cols-1
        grid-cols-1
        grid gap-4 my-4 
      ">
        <DisplayMediumAboutUs
          imageSrc={categories[0].image}
          subtitle={`BAUFIXIT is an Albanian-Czech cooperation, created by the combination of experience, technology, deep knowledge of the market, outstanding entrepreneurial skills and financial potential.`}
          subt2 = {`Established in 1991, BAUFIXIT has grown rapidly by taking a leading position in Czech Republic and a wide recognition in the region. `}
          subt3 = {`BAUFIXIT product portfolio ranges from tile adhesive, joint fillers, decorative coatings, finishes, gypsum-based products, self-levelers and waterproofs, and other accessories, applicable to the paving of tiles, decorative coating of walls, filling of brick and block walls, flattening and leveling, and hydro-insulation of horizontal and vertical surfaces, in indoor and outdoor environments for different weather conditions.`}
          subtitleOther={`Our products are certified according to the technical standards of EN, while the management of quality is attained according to ISO 9001 standards. Customer service operates with speed and determination, seeing the need of the client from the perspective of the latter. 
          The range of materials is continuously updated with regard to customer needs and the development of the construction industry. The production activity is focused on adhesives and ancillary products for technical insulation.`}
          title={'BRIEF HISTORY ABOUT “BAUFIXIT”: '}
        />
      </div>
      <div className="
        lg:my-8 lg:grid-cols-1
        grid-cols-1
        grid gap-4 my-4 
      ">
        <DisplayMediumAboutUs
          imageSrc={categories[0].image}
          subtitle={`The strategy of the business corporation is good partnerships with customers and satisfying their needs by supplying a wide range of building materials with interesting business conditions and high added value of technical support, consulting and services in accordance with the basic philosophy of business "BUILDING ON KNOWLEDGE".`}
          subtitleOther = {`Great importance is attached to specialized sales of selected commodities with an above-standard offer of goods and services.`}
          title={'MANAGEMENT PHILOSOPHY OF “BAUFIXIT”: '}
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const inventory = await fetchInventory()
  
  const inventoryCategorized = inventory.reduce((acc, next) => {
    const categories = next.categories
    categories.forEach(c => {
      const index = acc.findIndex(item => item.name === c)
      if (index !== -1) {
        const item = acc[index]
        item.itemCount = item.itemCount + 1
        acc[index] = item
      } else {
        const item = {
          name: c,
          image: next.image,
          itemCount: 1
        }
        acc.push(item)
      }
    })
    return acc
  }, [])
  
  return {
    props: {
      inventoryData: inventory,
      categories: inventoryCategorized
    }
  }
}

export default Home