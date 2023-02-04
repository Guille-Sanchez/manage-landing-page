import React, { useState } from 'react'
import Banner from './components/Banner.jsx'
import Carousel from './components/Carousel.jsx'
import FucntionalitiesList from './components/FucntionalitiesList.jsx'
import ManageProductInformation from './components/ManageProductInformation.jsx'
import Navbar from './components/Navbar.jsx'
function handleSubmit (e) {
  // Prevent the browser from reloading the page
  e.preventDefault()

  // Read the form data
  const form = e.target
  const formData = new FormData(form)

  // You can pass formData as a fetch body directly:
  fetch('/some-api', { method: form.method, body: formData })

  // Or you can work with it as a plain object:
  const formJson = Object.fromEntries(formData.entries())
  console.log(formJson)
}

function App () {
  const [firstName, setFirstName] = useState('')
  const functionalities = [{
    title: 'Track company-wide progress',
    body: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
  }, {
    title: 'Advanced built-in reports',
    body: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out reports you need to keep key stakeholders informed.'
  }, {
    title: 'Everything you need in one place',
    body: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
  }]

  const ABOUT_MANAGE = {
    title: 'Bring everyone together to build better products.',
    body: 'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.'
  }
  return (
    <>
      <Navbar/>
      <main>
        <div className='flex flex-col sm:flex-row-reverse sm:items-center sm:justify-around'>
          <Banner/>
          <ManageProductInformation ABOUT_MANAGE={ABOUT_MANAGE}/>
        </div>

        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-around'>
          <section className="p-7 pt-16 sm:pt-7 lg:w-1/2 lg:flex lg:flex-col lg:place-items-center">
            <h2 className="text-center text-3xl xl:text-4xl 2xl:text-5xl 2xl:leading-normal font-extrabold text-gray-800 lg:w-3/4">
              What&apos;s different about Manage?
            </h2>
            <p className="p-4 pl-11 pr-11 lg:pr-0 lg:pl-0 leading-relaxed text-justify text-xs sm:text-sm md:text-lg sm:text-center xl:text-xl 2xl:leading-normal font-semibold text-gray-900 text-opacity-40 lg:w-3/4">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </section>

          <FucntionalitiesList functionalities={functionalities}/>
        </div>

        <Carousel/>

        <section className="relative w-screen overflow-hidden p-0 pt-20">
          <div className="absolute -translate-x-80 translate-y-32 bg-[url('/bg-tablet-pattern.svg')] bg-cover bg-scroll bg-no-repeat p-64 opacity-10"></div>
          <div className="flex w-screen flex-col items-center bg-orange-600 bg-opacity-90 pt-32 pb-32">
            <h2 className="pb-10 text-center text-5xl font-extrabold leading-tight text-slate-200">
              Simplify how your team works today.
            </h2>
            <button className="rounded-full bg-slate-100 p-2 pl-6 pr-6 text-sm font-semibold text-orange-600">
              Get Started
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 pt-8">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="flex justify-evenly"
        >
          <input
            placeholder="Updates in your inbox..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="rounded-full border-2 border-stone-900 pl-5"
          />
          <button className="rounded-full bg-orange-600 p-2 pl-6 pr-6 text-sm font-semibold text-slate-200">
            Go
          </button>
        </form>
        <nav aria-label="secondary" className="pt-10">
          <ul className="flex justify-evenly text-slate-200">
            <div className="flex flex-col gap-y-2">
              <li>
                <a>Home</a>
              </li>
              <li>Pricing</li>
              <li>Products</li>
              <li>About Us</li>
            </div>

            <div className="flex flex-col gap-y-2">
              <li>Careers</li>
              <li>Commnity</li>
              <li>Privacy Policy</li>
            </div>
          </ul>
        </nav>

        <section
          aria-label="Social Media Links"
          className="flex justify-evenly items-center pt-10"
        >
          <a>
            <img className="w-8" src="/icon-facebook.svg" alt="Facebook Logo" />
          </a>
          <a>
            <img className="w-8" src="/icon-youtube.svg" alt="Youtube Logo" />
          </a>
          <a>
            <img className="w-8" src="/icon-twitter.svg" alt="Twitter Logo" />
          </a>
          <a>
            <img
              className="w-8"
              src="/icon-pinterest.svg"
              alt="Pinterest Logo"
            />
          </a>
          <a>
            <img
              className="w-8"
              src="/icon-instagram.svg"
              alt="Instagram Logo"
            />
          </a>
        </section>
        <section className="pt-10">
          <img src="/logo-footer.svg" className="m-auto" alt="" />
          <p className="pt-10 pb-10 text-center text-xs font-semibold text-slate-200 text-opacity-50">
            Copyright 2020. All Rights Reserved
          </p>
        </section>
      </footer>
    </>
  )
}

export default App
