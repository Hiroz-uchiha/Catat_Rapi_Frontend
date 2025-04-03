import React from 'react'

const Inputan = ({title, status,onChange}) => {
    return (
        <div className=' w-5/6 flex '>
            <input type="checkbox" checked={status} className='flex items-center' onChange={onChange} />
            <p className=' ml-3 items-center flex'>{title}</p>
        </div>
    )
}

export default Inputan
