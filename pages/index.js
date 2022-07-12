import Head from 'next/head'
import { Center, Tag, DisplaySmall, DisplayMedium } from '../components'
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
        <div className="bg-blue-300
        p-6 pb-20 smpb-6
        flex lg:flex-row flex-col">
          <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
            <Tag
              year="2021"
              category="SOFAS"
            />
            <Center
              price="200"
              title={ `Baufixit - Material Construction Company`}
              link={`https://dl.dropboxusercontent.com/s/rrgbtpld517yaxv/Katalogu%20OK%20pdf%20%282%29.pdf?dl=0`}
            />
          </div>
        </div>
      </div>
      <div className="
        lg:my-8 lg:grid-cols-2
        grid-cols-1
        grid gap-4 my-4 
      ">
        <DisplayMedium
          imageSrc={categories[0].image}
          // subtitle={`${categories[0].itemCount} items`}
          title={titleIfy(categories[0].name)}
          link={`/category/${slugify(categories[0].name)}`}
        />
        <DisplayMedium
          imageSrc={categories[0].image}
          // subtitle={`5 items`}
          title={titleIfy('best selling')}
          link={`/category/best-selling`}
        />
      </div>
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">Trending Now</h2>
        <p className="text-gray-600 text-sm">Those are our best trending products. Click on them to learn more!</p>
      </div>
      <div className="my-8 flex flex-col lg:flex-row justify-between">
        <DisplaySmall
          imageSrc={inventory[1].image}
          title={inventory[1].name}
          subtitle={inventory[1].categories[0]}
          link={`/product/${slugify(inventory[1].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[4].image}
          title={inventory[4].name}
          // subtitle={inventory[4].categories[0]}
          link={`/product/${slugify(inventory[4].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[8].image}
          title={inventory[8].name}
          subtitle={inventory[8].categories[0]}
          link={`/product/${slugify(inventory[8].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[5].image}
          title={inventory[5].name}
          subtitle={inventory[5].categories[0]}
          link={`/product/${slugify(inventory[5].name)}`}
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