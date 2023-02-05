import React from 'react'
import AboutManage from './components/AboutManage.jsx'
import Banner from './components/Banner.jsx'
import Carousel from './components/Carousel.jsx'
import FormUpdatesInInbox from './components/FormUpdatesInInbox.jsx'
import FucntionalitiesList from './components/FucntionalitiesList.jsx'
import ManageProductInformation from './components/ManageProductInformation.jsx'
import Navbar from './components/Navbar.jsx'
import FooterBanner from './components/FooterBanner.jsx'
import SecondaryNav from './components/SecondaryNav.jsx'
import SocialMedia from './components/SocialMedia.jsx'

function App () {
  return (
    <>
      <Navbar/>
      <main>
        <div className='pl-7 pr-7 flex flex-col sm:flex-row-reverse sm:items-center sm:justify-around'>
          <Banner/>
          <ManageProductInformation/>
        </div>

        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-around'>
          <AboutManage/>
          <FucntionalitiesList/>
        </div>

        <Carousel/>
        <FooterBanner/>
      </main>

      <footer className="bg-slate-800 pt-8 pb-20">
        <div className='md:flex md:flex-row-reverse w-screen sm:justify-evenly'>
          <FormUpdatesInInbox/>
          <SecondaryNav/>
          <div className='md:flex md:flex-col-reverse'>
            <SocialMedia/>
            <section className="pt-10">
              <img src="/logo-footer.svg" className="m-auto" alt="" />
              <p className="pt-10 pb-10 text-center text-xs font-semibold text-slate-200 text-opacity-50 md:hidden">
                Copyright 2020. All Rights Reserved
              </p>
            </section>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
