import Head from 'next/head'
import { CenterContact, Tag, DisplaySmallContact, DisplayMedium, DisaplyMediumContact } from '../components'
import { titleIfy, slugify } from '../utils/helpers'
import { fetchInventory } from '../utils/inventoryProvider'

const Home = ({ inventoryData = [], categories: categoryData = [] }) => {
  const inventory = inventoryData.slice(0, 15)
  const categories = categoryData.slice(0, 2)

  return (
    <>
      <div className="w-full">
        <Head>
          <title>Baufixit</title>
          <meta property="og:title" content="Baufixit" key="title" />
        </Head>
       
          <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col content-center ">
            <CenterContact
              price="200"
              title={ `Contact Us`}
              link={`https://dl.dropboxusercontent.com/s/rrgbtpld517yaxv/Katalogu%20OK%20pdf%20%282%29.pdf?dl=0`}
            />
        </div>
      </div>
      <div className="
        lg:my-8 lg:grid-cols-2
        grid-cols-1
        grid gap-4 my-4 
      ">
        <DisaplyMediumContact
          imageSrc={categories[0].image}
          subtitle={`+355 68 204 4040`}
          title={'PHONE: '}
        />
        <DisaplyMediumContact
          imageSrc={categories[0].image}
          subtitle={`sales@baufixit.com`}
          title={'EMAIL: '}
        />
      </div>
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">Our certificates</h2>
      </div>
      <div className="my-4 flex flex-col lg:flex-row justify-center mt-12">

        <DisplaySmallContact
          imageSrc={'https://i.imgur.com/SXJRfZb.png'}
          title={'ISO 9001:2015'}
          link={`https://i.imgur.com/SXJRfZb.png`}
          downText = {'Quality Management System'}
        />

        <DisplaySmallContact
          imageSrc={'https://i.imgur.com/yU5h6Ki.png'}
          title={'ISO 14001:2015'}
          link={`https://i.imgur.com/yU5h6Ki.png`}
          downText = {'Environmental Management System'}
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