import React, { useState } from 'react'
import NavBackground from './NavBackground.jsx'
import ButtonGetStarted from './ButtonGetStarted'

function Navbar () {
  const navLinks = ['Pricing', 'Product', 'About Us', 'Careers', 'Community']
  const [hideNavModal, setHideNavModal] = useState(true)

  function toggleHideNavModal () {
    setHideNavModal(() => !hideNavModal)
  }

  if (hideNavModal) {
    return (
      <>
        <div className='relative flex w-screen justify-between p-7 items-center lg:pl-16 lg:pr-16'>
          <header>
            <h1 className="invisible h-0 w-0">Manage Inc.</h1>
            <img src="/logo.svg" alt="Logo Manage" />
          </header>

          <nav>
            <div className='md:hidden'>
              <NavBackground />
            </div>
            <div className='sm:hidden'> {/* Displays Hamburguer or close button in sm breakpoint */}
              <button
                onClick={toggleHideNavModal}
              >
                <img src='/icon-hamburger.svg' alt="Menu Icon" />
              </button>
            </div>

            <div className='hidden sm:block'>
              <div className='sm:hidden'> {/* Displays Hamburguer or close button in sm breakpoint */}
                <button onClick={toggleHideNavModal} >
                  <img src='/icon-hamburger.svg' alt="Menu Icon" />
                </button>
              </div>
              <ul className='flex items-center gap-3 sm:gap-1 lg:gap-3 justify-around pr-7 lg:pl-16 lg:pr-16'>
                {navLinks.map((link) => {
                  return (<li key={link}>{link}</li>)
                })}
              </ul>
            </div>
          </nav>
          <div className='hidden md:block pr-7'>
            <NavBackground/>
            <ButtonGetStarted/>
            </div>
        </div>
      </>
    )
  } else {
    return (
      <>
      <div className='relative flex w-screen justify-between p-7'>
        <header>
          <h1 className="invisible h-0 w-0">Manage Inc.</h1>
          <img src="/logo.svg" alt="Logo Manage" />
        </header>

        <nav>
          <NavBackground/>
          <div className='z-20 fixed inset-0 bg-black bg-opacity-25'>
            <div className='flex pt-6 pr-7 flex-row-reverse right-10'>
              <button onClick={toggleHideNavModal}>
                <img src={'/icon-close.svg'} alt="Menu Icon" />
              </button>
            </div>

            <div className='flex justify-center pt-12'>
              <ul className='flex flex-col font-semibold items-center justify-center gap-8 bg-white w-80 h-80'>
                {navLinks.map((link) => {
                  return (<li key={link}>{link}</li>)
                })}
                <li className='hidden md:block'><ButtonGetStarted/></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      </>
    )
  }
}

export default Navbar
