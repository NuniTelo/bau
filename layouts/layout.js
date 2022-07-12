import Link from 'next/link'
import { slugify } from '../utils/helpers'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { navItemLength } from '../ecommerce.config'

export default function Layout({ children, categories }) {
  if (categories.length > navItemLength) {
    let categoryToRemove = 'decorative microcement and acrylic ready mixed coatings'
    categories = categories.filter(
      item => item !== categoryToRemove
  );
    categories = categories.slice(0, navItemLength)
   
  }
  return (
    <div>
      <nav>
        <div className="flex justify-center">
          <div className="
            mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0
            px-4 pt-8 flex flex-col w-fw
          ">
            <div className="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
              <Link href="/">
                <a aria-label="Home">
                  <img src="/logo.png" alt="logo" width="120" height="28" />
                </a>
              </Link>
            </div>
            <div className="flex flex-wrap mt-1">
              <Link href="/">
                <a aria-label="Home">
                  <p className="
                    sm:mr-12 sm:mb-0
                    mb-6 text-left text-2xl mr-3 mt-4 font-semibold
                  ">
                  Home
                  </p>
                </a>
              </Link>
              <Link href="/categories">
                <a aria-label="All categories">
                  <p className="
                    sm:mr-12 sm:mb-0 
                    mb-4 text-left text-2xl mr-4 mt-4 font-semibold
                  ">
                  Categories
                  </p>
                </a>
              </Link>
              {
                categories.map((category, index) => (
                  <Link
                    href={`/category/${slugify(category)}`}
                    key={index}
                  >
                    <a aria-label={category}>
                      <p className="
                          sm:mr-12 sm:mb-0 s
                          mb-4 text-left text-2xl mr-4 mt-4 font-semibold
                        ">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </p>
                    </a>
                  </Link>
                ))
              }
               <Link href="/contact-us">
                <a aria-label="Contact Us">
                  <p className="
                    sm:mr-12 sm:mb-0
                    mb-4 text-left text-2xl mr-4 mt-4 font-semibold
                  ">
                  Contact
                  </p>
                </a>
              </Link>
              <Link href="/about-us">
                <a aria-label="About Us">
                  <p className="
                    sm:mr-12 sm:mb-0
                    mb-4 text-left text-2xl mr-4 mt-4 font-semibold
                  ">
                  About
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="mobile:px-10 px-4 pb-10 flex justify-center">
        <main className="w-fw">{children}</main>
      </div>
      <footer className="flex justify-center">
        <div className="
        sm:flex-row sm:items-center
        flex-col
        flex w-fw px-12 py-8
        desktop:px-0
        border-solid
        border-t border-gray-300">
          <span className="block text-gray-700 text-xs">Copyright © 2022 Baufixit. &nbsp;</span>
          <a href="https://www.instagram.com/baufixit"> 
            <img width="18" height="18" src="https://cdn.icon-icons.com/icons2/2066/PNG/512/instagram_icon_125245.png" ></img>
          </a>
          <div className="
            sm:justify-end sm:m-0
            flex flex-1 mt-4
          ">
          </div>
        </div>
      </footer>
      <ToastContainer autoClose={3000} />
    </div>
  )
}