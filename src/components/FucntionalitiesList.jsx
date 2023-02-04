import React from 'react'
import PropTypes from 'prop-types'

function FucntionalitiesList (props) {
  const functionalities = props.functionalities

  FucntionalitiesList.propTypes = {
    functionalities: PropTypes.array
  }

  return (
    <div className='lg:flex lg:flex-col lg:w-1/2'>
      {functionalities.map((qualities, index) => {
        return (
          <section className="p-7 pt-4" key={qualities.title}>
            <h2 className="-mr-10 rounded-l-full bg-orange-300 lg:bg-inherit sm:text-xl lg:text-2xl bg-opacity-25 pt-1 pb-1 font-extrabold text-slate-800">
              <span className="rounded-full bg-orange-600 pl-4 pr-4 sm:pl-8 sm:pr-8 pt-1 pb-1 text-center sm:text-xl lg:text-2xl text-slate-200">
                {index + 1}
              </span>{' '}
              {qualities.title}
            </h2>
            <p className="pt-2 leading-loose text-xs sm:text-lg xl:text-xl xl:leading-relaxed text-gray-900 text-opacity-40">
              {qualities.body}
            </p>
          </section>

        )
      })}
    </div>
  )
}

export default FucntionalitiesList
