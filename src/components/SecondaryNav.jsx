import React from 'react'

function SecondaryNav () {
  const SECONDARY_NAVIGATION_LIST = [['Home', 'Pricing', 'Products', 'About Us'],
    ['Careers', 'Community', 'Privacy Policy']]
  return (
    <nav aria-label="secondary" className="pt-10 lg:w-1/3">
      <div className='flex justify-center'>
        <div className="flex justify-evenly grow" role='list'>
          {SECONDARY_NAVIGATION_LIST.map((LIST, index) => {
            return (
              <ul key={`Secondary Nav ${index}`} className="flex flex-col gap-y-2 items-start text-slate-200">
                {LIST.map((link) => {
                  return (<li key={link} className='md:text-xl cursor-pointer'><a href={`/${link}`}>{link}</a></li>)
                })}
              </ul>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default SecondaryNav
