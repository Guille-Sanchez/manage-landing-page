import React from 'react'
import PropTypes from 'prop-types'

function FucntionalitiesList (props) {
  const functionalities = props.functionalities

  FucntionalitiesList.propTypes = {
    functionalities: PropTypes.array
  }

  return (
    <>
      {functionalities.map((qualities, index) => {
        return (
          <section className="p-7 pt-4" key={qualities.title}>
            <h2 className="-mr-10 rounded-l-full bg-orange-300 bg-opacity-25 pt-1 pb-1 font-extrabold text-slate-800">
              <span className="rounded-full bg-orange-600 pl-4 pr-4 pt-1 pb-1 text-center text-slate-200">
                {index + 1}
              </span>{' '}
              {qualities.title}
            </h2>
            <p className="pt-2 leading-loose text-xs text-gray-900 text-opacity-40">
              {qualities.body}
            </p>
          </section>

        )
      })}
    </>
  )
}

export default FucntionalitiesList
