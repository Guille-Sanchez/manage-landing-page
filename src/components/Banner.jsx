import React from 'react'

function Banner () {
  return (
    <div className="flex sm:w-screen lg:w-1/2 justify-center">
      <img
        className="block w-80 md:w-96 lg:w-3/4 "
        src="/illustration-intro.svg"
        alt="Graphs of time managment"
      />
    </div>
  )
}

export default Banner
