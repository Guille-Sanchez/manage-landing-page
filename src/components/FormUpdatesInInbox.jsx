import React, { useState } from 'react'

function FormUpdatesInInbox () {
  const [firstName, setFirstName] = useState('')
  function handleSubmit (e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formJson = Object.fromEntries(formData.entries())
    console.log(formJson)
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Updates in your inbox..."
          name='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="rounded-full border-2 border-stone-900 pl-5"
        />
        <button className="rounded-full bg-orange-600 p-2 pl-6 pr-6 text-sm font-semibold text-slate-200">
          Go
        </button>
      </form>

      <p className="hidden md:block pt-10 pb-10 sm:pb-0 sm:pt-3 text-center text-xs font-semibold text-slate-200 text-opacity-50">
        Copyright 2020. All Rights Reserved
      </p>
    </div>
  )
}

export default FormUpdatesInInbox
