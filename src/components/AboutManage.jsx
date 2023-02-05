import React from 'react'

function AboutManage () {
  return (
    <section className="relative p-7 pt-16 sm:pt-7 lg:pt-0 lg:w-1/2 lg:flex lg:flex-col lg:place-items-center">
      <h2 className="text-center text-3xl xl:text-4xl 2xl:text-5xl 2xl:leading-normal font-extrabold text-gray-800 lg:w-3/4">
        What&apos;s different about Manage?
      </h2>
      <p className="p-4 pl-11 pr-11 lg:pr-0 lg:pl-0 leading-relaxed text-justify text-xs sm:text-sm md:text-lg sm:text-center xl:text-xl 2xl:leading-normal font-semibold text-gray-900 text-opacity-40 lg:w-3/4">
        Manage provides all the functionality your team needs, without the
        complexity. Our software is tailor-made for modern digital product
        teams.
      </p>
      <div className={'hidden lg:block absolute -left-96 top-52 -z-10 bg-[url(\'/bg-tablet-pattern.svg\')] bg-cover bg-scroll bg-no-repeat p-80'}/>

    </section>
  )
}

export default AboutManage
