import React from 'react'

function NavBackground() {
  return (
    <>
    <div className={`absolute -z-10 -translate-x-60 -translate-y-28 ${/*hideNavModal ? 'sm:translate-x-10' : '-sm:translate-x-60'*/} sm:-translate-y-24
    bg-[url('/bg-tablet-pattern.svg')] bg-cover bg-scroll bg-no-repeat p-44`}/> {/* Background Image */}
    </>
  )
}

export default NavBackground