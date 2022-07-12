import Head from 'next/head'
import { titleIfy , slugify } from '../utils/helpers'
import { DisplayMedium } from '../components'
import { fetchInventory } from '../utils/inventoryProvider'
import Collapsible from 'react-collapsible';
import {waterprofingMaterials, 
  paintsAndRenders, 
  tileAdhesivesAndGrouts, 
  repairMaterials,
  decorativeFlooring, 
  flooring, 
  concreteMortarAdmixtures
} from '../utils/categories'

function Categories ({ categories = [] }) {
  return (
    <>
      <div className="w-full">
        <Head>
          <title> Baufixit - All Categories</title>
          <meta name="description" content={`Baufixit - All categories`} />
          <meta property="og:title" content="Baufixit - All Categories" key="title" />
        </Head>




        {/* Waterproof & Tanks - SECTION - START */}

        <Collapsible trigger="Waterproof & Tanks" className="text-5xl font-light" openedClassName="text-5xl font-light" open={true} >
        <div className="
          pt-4 sm:pt-10 pb-8
        ">
          {/* <h1 className="text-5xl font-light">Waterproof & Tanks</h1> */}
        </div>

        <div className="flex flex-col">
          {/* <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between"> */}
          <div className="grid gap-4
          lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {
            waterprofingMaterials.map((category, index) => (
              <DisplayMedium
                key={index}
                imageSrc={category.image}
                // subtitle={`${category.itemCount} items`}
                title={titleIfy(category.name)}
                link={`/category/${slugify(category.name)}`}
              />
            ))
          }
          </div>
        </div>
        </Collapsible>
          <br/>
          <br/>
          <br/>

           {/* Waterproof & Tanks - SECTION - END*/}





        {/* Paints & Renders - SECTION - START */}
        <Collapsible trigger="Paints & Renders" className="text-5xl font-light" openedClassName="text-5xl font-light">
        <div className="
          pt-4 sm:pt-10 pb-8
        ">
          {/* <h1 className="text-5xl font-light">Paints & Renders</h1> */}
        </div>
        <div className="flex flex-col items-center">
          
          {/* <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between"> */}
          <div className="grid gap-4
          lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {
            paintsAndRenders.map((category, index) => (
              <DisplayMedium
                key={index}
                imageSrc={category.image}
                // subtitle={`${category.itemCount} items`}
                title={titleIfy(category.name)}
                link={`/category/${slugify(category.name)}`}
              />
            ))
          }
          </div>
        </div>
        </Collapsible>
          <br/>
          <br/>
          <br/>
       {/* Paints & Renders - SECTION - END */}





        {/* Tile Adhesives & Grouts - SECTION - START */}
        <Collapsible trigger="Tile Adhesives & Grouts" className="text-5xl font-light" openedClassName="text-5xl font-light" >
        <div className="
          pt-4 sm:pt-10 pb-8
        ">
          {/* <h1 className="text-5xl font-light">Waterproof & Tanks</h1> */}
        </div>

        <div className="flex flex-col items-center">
          {/* <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between"> */}
          <div className="grid gap-4
          lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {
            tileAdhesivesAndGrouts.map((category, index) => (
              <DisplayMedium
                key={index}
                imageSrc={category.image}
                // subtitle={`${category.itemCount} items`}
                title={titleIfy(category.name)}
                link={`/category/${slugify(category.name)}`}
              />
            ))
          }
          </div>
        </div>
        </Collapsible>

          <br/>
          <br/>
          <br/>
        {/* Tile Adhesives & Grouts - SECTION - END */}





            {/* Repair Materials - SECTION - START */}
        <Collapsible trigger="Repair Materials" className="text-5xl font-light" openedClassName="text-5xl font-light" >
        <div className="
          pt-4 sm:pt-10 pb-8
        ">
          {/* <h1 className="text-5xl font-light">Waterproof & Tanks</h1> */}
        </div>

        <div className="flex flex-col items-center">
          {/* <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between"> */}
          <div className="grid gap-4
          lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {
            repairMaterials.map((category, index) => (
              <DisplayMedium
                key={index}
                imageSrc={category.image}
                // subtitle={`${category.itemCount} items`}
                title={titleIfy(category.name)}
                link={`/category/${slugify(category.name)}`}
              />
            ))
          }
          </div>
        </div>
        </Collapsible>

          <br/>
          <br/>
          <br/>
        {/* Repair Materials - SECTION - END */}



          {/*Decorative Flooring - SECTION - START */}
  <Collapsible trigger="Decorative Flooring" className="text-5xl font-light" openedClassName="text-5xl font-light" >
        <div className="
          pt-4 sm:pt-10 pb-8
        ">
          {/* <h1 className="text-5xl font-light">Decorative Flooring</h1> */}
        </div>

        <div className="flex flex-col items-center">
          {/* <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between"> */}
          <div className="grid gap-4
          lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {
            decorativeFlooring.map((category, index) => (
              <DisplayMedium
                key={index}
                imageSrc={category.image}
                // subtitle={`${category.itemCount} items`}
                title={titleIfy(category.name)}
                link={`/category/${slugify(category.name)}`}
              />
            ))
          }
          </div>
        </div>
        </Collapsible>

          <br/>
          <br/>
          <br/>
        {/* Decorative Flooring - SECTION - END */}


          {/*Flooring - SECTION - START */}
          {/* <Collapsible trigger="Flooring" className="text-5xl font-light" openedClassName="text-5xl font-light" >
        <div className="
          pt-4 sm:pt-10 pb-8
        "> */}
          {/* <h1 className="text-5xl font-light">Waterproof & Tanks</h1> */}
        {/* </div> */}

        {/* <div className="flex flex-col items-center"> */}
          {/* <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between"> */}
          {/* <div className="grid gap-4
          lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {
            flooring.map((category, index) => (
              <DisplayMedium
                key={index}
                imageSrc={category.image}
                subtitle={`${category.itemCount} items`}
                title={titleIfy(category.name)}
                link={`/category/${slugify(category.name)}`}
              />
            ))
          }
          </div>
        </div>
        </Collapsible>

          <br/>
          <br/>
          <br/> */}
        {/* Flooring - SECTION - END */}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const inventory = await fetchInventory()
  const inventoryCategories = inventory.reduce((acc, next) => {
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
      categories: inventoryCategories
    }
  }
}

export default Categories