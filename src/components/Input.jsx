import React from 'react'

function Input({title, value, setValue}) {
  return (
    <div className='d-flex justify-content-between align-items-center m-3'>
        <label className='form-control-lg text-bold'>{title}: </label>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className='border rounded-1 w-75 bg-gray'/>
    </div>
  )
}

export default Input