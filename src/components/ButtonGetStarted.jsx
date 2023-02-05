import React from 'react'
import PropTypes from 'prop-types'

function ButtonGetStarted (props) {
  const color = props.color

  ButtonGetStarted.propTypes = {
    color: PropTypes.string
  }
  return (
    <button className={`rounded-full ${color === 'bg-orange-600' ? 'bg-orange-600' : 'bg-slate-200'} p-2 xl:p-4 pl-6 xl:pl-8 pr-6 xl:pr-8 text-sm xl:text-lg font-semibold ${color === 'bg-orange-600' ? 'text-slate-200' : 'text-orange-600'} text-slate-200 text-center`}>
      Get Started
    </button>
  )
}

export default ButtonGetStarted
