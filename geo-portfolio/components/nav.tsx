import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <header className="text-gray-600 body-font shadow-xl">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-2xl lg:text-xl">Georgia Hill | Creative</span>
    </Link>
    <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href='/about' className="mr-5 hover:text-gray-900">About</Link>
      <Link href='/contact'className="mr-5 hover:text-gray-900">Contact</Link>
      
    </div>
   
  </div>
</header>
  )
}

export default Nav