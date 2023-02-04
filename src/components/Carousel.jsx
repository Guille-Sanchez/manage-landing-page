import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

function Carousel () {
  const USERS_FEEDBACK = [{ image: '/avatar-anisha.png', name: 'Anisha Li', body: 'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.' },
    { image: '/avatar-ali.png', name: 'Ali Bravo', body: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.' },
    { image: '/avatar-richard.png', name: 'Richard Watts', body: 'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!' },
    { image: '/avatar-shanai.png', name: 'Shanai Gough', body: 'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.' }]

  const [currentPosition, setCurrentPosition] = useState(0)
  function nextSlide () {
    const isLastSlide = currentPosition === USERS_FEEDBACK.length - 1
    isLastSlide ? setCurrentPosition(() => 0) : setCurrentPosition((prev) => prev + 1)
  }
  function prevSlide () {
    const isfirstSlide = currentPosition !== 0
    isfirstSlide ? setCurrentPosition((prev) => prev - 1) : setCurrentPosition(() => USERS_FEEDBACK.length - 1)
  }
  return (
    <section className="p-7 relative group">

      <BsChevronLeft onClick={prevSlide} className='absolute top-1/2 hidden h-6 w-6 group-hover:block'/>
      <BsChevronRight onClick={nextSlide} className='hidden h-6 w-6 group-hover:block absolute top-1/2 right-7'/>

      <h2 className="pr-8 pl-8 pb-2 text-center text-2xl font-extrabold text-gray-800">
        What they&apos;ve said
      </h2>
      <figure className="flex flex-col place-items-center">
        <img className="w-16" src={USERS_FEEDBACK[currentPosition].image} alt={USERS_FEEDBACK[currentPosition].name} />
        <figcaption>
          <b>{USERS_FEEDBACK[currentPosition].name}</b>
        </figcaption>
        <blockquote className="pt-2 pr-9 pl-9 text-center leading-loose text-xs text-gray-900 text-opacity-40">
          &ldquo;{USERS_FEEDBACK[currentPosition].body}&rdquo;
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
