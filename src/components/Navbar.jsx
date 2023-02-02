import React, { useState } from 'react'

function Navbar () {
  const navLinks = ['Pricing', 'Product', 'About Us', 'Careers', 'Community']
  const [hideNavModal, setHideNavModal] = useState(true)

  return (
    <>
      <div className='relative flex w-screen justify-between p-7'>
        <header>
          <h1 className="invisible h-0 w-0">Manage Inc.</h1>
          <img src="/logo.svg" alt="Logo Manage" />
        </header>

        <nav>
          <div className={`absolute -z-10 -translate-x-60 -translate-y-28 ${hideNavModal ? 'sm:translate-x-10' : '-sm:translate-x-60'} sm:-translate-y-24
                          bg-[url('/bg-tablet-pattern.svg')] bg-cover bg-scroll bg-no-repeat p-44`}/>

          <div className={`${hideNavModal ? 'sm:hidden' : ''}`}>
            <button
              onClick={() => {
                setHideNavModal(() => !hideNavModal)
              }}
            >
              <img src={`${hideNavModal ? '/icon-hamburger.svg' : '/icon-close.svg'}`} alt="Menu Icon" />
            </button>
          </div>

          <div className={` ${hideNavModal ? 'hidden sm:block' : ' absolute z-10 w-80 -translate-x-72  bg-orange-300 bg-opacity-10'}`}>
            <ul className={`${hideNavModal ? 'flex' : 'flex flex-col items-center gap-8'}` } >
              {navLinks.map((link) => {
                return (<li key={link}>{link}</li>)
              })}
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
