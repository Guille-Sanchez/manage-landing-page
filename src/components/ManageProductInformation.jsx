import React from 'react'
import PropTypes from 'prop-types'
import ButtonGetStarted from './ButtonGetStarted'

function ManageProductInformation (props) {
  const ABOUT_MANAGE = props.ABOUT_MANAGE

  ManageProductInformation.propTypes = {
    ABOUT_MANAGE: PropTypes.object
  }

  return (
    <section className="p-7 pb-0 sm:p-0 lg:w-1/2 flex place-items-center flex-col">
      <h2 className="text-center text-3xl xl:text-4xl 2xl:text-5xl 2xl:leading-normal font-extrabold text-gray-800 lg:w-3/4">
        {ABOUT_MANAGE.title}
      </h2>
      <p className="p-4 pl-11 pr-11 leading-relaxed text-justify text-xs md:text-lg xl:text-xl 2xl:leading-normal font-semibold text-gray-900 text-opacity-40 lg:w-3/4">
        {ABOUT_MANAGE.body}
      </p>
      <div className="flex justify-center">
        <ButtonGetStarted/>
      </div>
    </section>
  )
}

export default ManageProductInformation
