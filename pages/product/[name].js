import { useState } from 'react'
import Head from 'next/head'
import Image from '../../components/Image'
import { fetchInventory } from '../../utils/inventoryProvider'
import { slugify } from '../../utils/helpers'
import { SiteContext, ContextProviderComponent } from '../../context/mainContext'

const ItemView = (props) => {
  const [numberOfitems, updateNumberOfItems] = useState(1)
  const { product } = props
  const { price, image, name, description, subtitle, packaging, consumption, colors, classified } = product
  const { context: { addToCart }} = props

  function addItemToCart (product) {
    product["quantity"] = numberOfitems
    addToCart(product)
  }

  function increment() {
    updateNumberOfItems(numberOfitems + 1)
  }

  function decrement() {
    if (numberOfitems === 1) return
    updateNumberOfItems(numberOfitems - 1)
  }

  return (
    <>
      {/* <CartLink /> */}
      <Head>
        <title>Baufixit - {name}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`Baufixit - ${name}`} key="title" />
      </Head>
      <div className="
        sm:py-12
        md:flex-row
        py-4 w-full flex flex-1 flex-col my-0 mx-auto
      ">
        <div className="w-full md:w-1/2 h-120 flex flex-1 bg-light hover:bg-light-200">
          <div className="py-4 p10 flex flex-1 justify-center items-center">
            <Image src={image} alt="Inventory item" className="max-h-full" />
          </div>
        </div>
        <div className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2">
          <h1 className="
           sm:mt-0 mt-2 text-5xl font-light leading-large font-semibold
          ">{name}</h1>
          <h2 className="text-2xl tracking-wide sm:py-8 py-6">{subtitle}</h2>
          <p className="text-gray-600 leading-7">{description}</p>
          <div className="my-6">
          
          </div>
        </div>
      </div>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Other Information
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-600 dark:text-white whitespace-nowrap">
                    Classified
                </th>
                <td className="px-6 py-4">
                    {classified}
                </td>  
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-600 dark:text-white whitespace-nowrap">
                  Packaging
                </th>
                <td className="px-6 py-4">
                    {packaging}
                </td>    
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-600 dark:text-white whitespace-nowrap">
                Consumption
                </th>
                <td className="px-6 py-4">
                    {consumption}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-600 dark:text-white whitespace-nowrap">
                Colors
                </th>
                <td className="px-6 py-4">
                  {colors}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-600 dark:text-white whitespace-nowrap">
                Technical Information
                </th>
                <td className="px-6 py-4">
                  link for technical information
                </td>
            </tr>                  
        </tbody>
    </table>
</div>
    </>
  )
}

export async function getStaticPaths () {
  const inventory = await fetchInventory()
  const paths = inventory.map(item => {
    return { params: { name: slugify(item.name) }}
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const name = params.name.replace(/-/g," ")
  const inventory = await fetchInventory()
  const product = inventory.find(item => slugify(item.name) === slugify(name))

  return {
    props: {
      product,
    }
  }
}

function ItemViewWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {
          context => <ItemView {...props} context={context} />
        }
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}

export default ItemViewWithContext