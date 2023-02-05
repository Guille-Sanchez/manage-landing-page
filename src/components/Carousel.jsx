import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import CarouselPages from './CarouselPages'
import ButtonGetStarted from './ButtonGetStarted.jsx'

function Carousel () {
  const USERS_FEEDBACK = [{ image: '/avatar-anisha.png', name: 'Anisha Li', body: 'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.' },
    { image: '/avatar-ali.png', name: 'Ali Bravo', body: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.' },
    { image: '/avatar-richard.png', name: 'Richard Watts', body: 'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!' },
    { image: '/avatar-shanai.png', name: 'Shanai Gough', body: 'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.' }]

  const [firstPosition, setfirstPosition] = useState(0)
  const [secondPosition, setSecondPosition] = useState(1)
  const [thirdPosition, setThirdPosition] = useState(2)

  function nextSlide () {
    const isLastSlide = firstPosition === USERS_FEEDBACK.length - 1
    isLastSlide ? setfirstPosition(() => 0) : setfirstPosition((prev) => prev + 1)

    const isOneToLastSlide = secondPosition === USERS_FEEDBACK.length - 1
    isOneToLastSlide ? setSecondPosition(() => 0) : setSecondPosition((prev) => prev + 1)

    const isTwoToLastSlide = thirdPosition === USERS_FEEDBACK.length - 1
    isTwoToLastSlide ? setThirdPosition(() => 0) : setThirdPosition((prev) => prev + 1)
  }
  function prevSlide () {
    const isFirstSlide = firstPosition !== 0
    isFirstSlide ? setfirstPosition((prev) => prev - 1) : setfirstPosition(() => USERS_FEEDBACK.length - 1)

    const isSecondSlide = secondPosition !== 0
    isSecondSlide ? setSecondPosition((prev) => prev - 1) : setSecondPosition(() => USERS_FEEDBACK.length - 1)

    const isThirdSlide = thirdPosition !== 0
    isThirdSlide ? setThirdPosition((prev) => prev - 1) : setThirdPosition(() => USERS_FEEDBACK.length - 1)
  }

  return (
    <section className="p-7 relative group">

      <BsChevronLeft onClick={() => { prevSlide() }} className='absolute top-1/2 hidden h-6 w-6 group-hover:block cursor-pointer'/>
      <BsChevronRight onClick={() => { nextSlide() }} className='hidden h-6 w-6 group-hover:block absolute top-1/2 right-7 cursor-pointer sm:hidden'/>

      <h2 className="pr-8 pl-8 pb-2 text-center text-2xl font-extrabold text-gray-800">
        What they&apos;ve said
      </h2>

      <div className='sm:flex justify-between'>
        <CarouselPages USERS_FEEDBACK={USERS_FEEDBACK} currentPosition={firstPosition}/>
        <div className='hidden sm:block'>
          <CarouselPages USERS_FEEDBACK={USERS_FEEDBACK} currentPosition={secondPosition}/>
        </div>
        <div className='hidden xl:block'>
          <CarouselPages USERS_FEEDBACK={USERS_FEEDBACK} currentPosition={thirdPosition}/>
        </div>
      </div>

      <div className="pt-4 flex justify-center">
        <ButtonGetStarted color={'bg-orange-600'}/>
      </div>

      <div className='flex pt-4 justify-center gap-2 sm:hidden'>
        {[...Array(USERS_FEEDBACK.length)].map((_, index) => (
          <div key={`Carousel-Image ${index}`} className={`w-3 h-3 rounded-full border-solid border border-orange-600 ${firstPosition === index ? 'bg-orange-600' : ''}`}></div>
        ))}
      </div>
    </section>
  )
}

export default Carousel
