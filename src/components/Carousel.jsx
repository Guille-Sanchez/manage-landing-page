import React from 'react'

function Carousel () {
  return (
    <section className="p-7">
    <h2 className="pr-8 pl-8 pb-2 text-center text-2xl font-extrabold text-gray-800">
      What they&apos;ve said
    </h2>
    <figure className="flex flex-col place-items-center">
      <img className="w-16" src="/avatar-ali.png" alt="Ali Bravo" />
      <figcaption>
        <b>Ali Bravo</b>
      </figcaption>
      <blockquote className="pt-2 pr-9 pl-9 text-center leading-loose text-xs text-gray-900 text-opacity-40">
        &ldquo;We have been able to cancel so many other subscriptions since
        using Manage. There is no more cross-channel confusion and
        everyone is much more focused.&rdquo;
      </blockquote>
    </figure>
    <div className="flex justify-center">
      <button className="rounded-full bg-orange-600 p-2 pl-6 pr-6 text-sm font-semibold text-slate-200">
        Get Started
      </button>
    </div>
  </section>
  )
}

export default Carousel
