import React from 'react'
import PropTypes from 'prop-types'

function ManageProductInformation (props) {
  const ABOUT_MANAGE = props.ABOUT_MANAGE

  ManageProductInformation.propTypes = {
    ABOUT_MANAGE: PropTypes.object
  }

  return (
    <section className="p-7 pb-0">
      <h2 className="text-center text-3xl font-extrabold text-gray-800">
        {ABOUT_MANAGE.title}
      </h2>
      <p className="p-4 pl-11 pr-11 leading-relaxed text-justify text-xs font-semibold text-gray-900 text-opacity-40">
        {ABOUT_MANAGE.body}
      </p>
    </section>
  )
}

export default ManageProductInformation
