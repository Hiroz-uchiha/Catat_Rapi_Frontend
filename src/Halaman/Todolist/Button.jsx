import React from 'react'

const Button = ({className, onUpdate,onDelete}) => {
  return (
        <div className={` w-1/5 flex justify-around ${className}`}>
            <button className=' bg-green-200 p-2' onClick={onUpdate}>Update</button>
            <button className=' bg-red-200 p-2' onClick={onDelete}>Hapus</button>
          </div>
  )
}

export default Button
