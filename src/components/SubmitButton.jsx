import React from 'react'

function SubmitButton({title, onClick}) {
  return (
    <div className='d-flex justify-content-end text-light'>
        <div className='btn bg-purple-gradient text-light bold w-25' onClick={() => onClick}>{title}</div>
    </div>
  )
}

export default SubmitButton