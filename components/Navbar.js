import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg ">
    <div className="container mx-auto flex flex-wrap p-5 pb-3 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="/store-logo-h.svg" alt="" height={70} width={150} />

      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
       <Link href={'/'}><a className="mr-5 font-bold hover:text-gray-900">Home</a></Link> 
       <Link href={'/shop'}><a className="mr-5 font-bold hover:text-gray-900">Shop</a></Link> 
       <Link href={'/gallery'}><a className="mr-5 font-bold hover:text-gray-900">Gallery</a></Link> 
       <Link href={'/about'}><a className="mr-5 font-bold hover:text-gray-900">About</a></Link> 
      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Know More
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
  )
}

export default Navbar