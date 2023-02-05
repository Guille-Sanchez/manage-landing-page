import React from 'react'
import ButtonGetStarted from './ButtonGetStarted'

function FooterBanner () {
  return (
    <section className="relative w-screen overflow-hidden pt-20">
      <div className="absolute -translate-x-80 translate-y-32 bg-[url('/bg-tablet-pattern.svg')] bg-cover bg-scroll bg-no-repeat p-64 opacity-10"></div>
      <div className="flex w-screen flex-col lg:flex-row items-center lg:justify-evenly bg-orange-600 bg-opacity-90 pt-32 pb-32">
        <h2 className="pb-10 text-center text-5xl font-extrabold leading-tight text-slate-200">
          Simplify how your team works today.
        </h2>
        <div className='relative'>
          <ButtonGetStarted color={'white'}/>
          <div className={'opacity-10 hidden left-40 -top-96 lg:block absolute bg-[url(\'/bg-tablet-pattern.svg\')] bg-cover bg-scroll bg-no-repeat p-56'}/>
        </div>
      </div>
    </section>
  )
}

export default FooterBanner
