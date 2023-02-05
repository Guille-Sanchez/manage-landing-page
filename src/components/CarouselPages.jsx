import React from 'react'
import PropTypes from 'prop-types'

function CarouselPages (props) {
  const USERS_FEEDBACK = props.USERS_FEEDBACK
  const currentPosition = props.currentPosition

  CarouselPages.propTypes = {
    USERS_FEEDBACK: PropTypes.array,
    currentPosition: PropTypes.number
  }

  return (
    <figure className="flex flex-col place-items-center">
      <img className="w-16 sm:w-20" src={USERS_FEEDBACK[currentPosition].image} alt={USERS_FEEDBACK[currentPosition].name} />
      <figcaption>
        <b className='sm:text-lg'>{USERS_FEEDBACK[currentPosition].name}</b>
      </figcaption>

      <blockquote className="pt-2 pr-9 pl-9 text-center leading-loose text-xs sm:text-base text-gray-900 text-opacity-40">
        &ldquo;{USERS_FEEDBACK[currentPosition].body}&rdquo;
      </blockquote>
    </figure>
  )
}

export default CarouselPages
