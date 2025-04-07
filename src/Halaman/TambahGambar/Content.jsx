import React from 'react'

const Content = ({ id, url, judul, isi }) => {
  return (
    <div className='flex justify-center my-4'>
      <div key={id} className='shadow-md p-4 bg-white rounded'>
        <div className='flex justify-center'>
          <img src={url} alt="gambar" className='w-64 h-auto object-cover rounded' />
        </div>
        <div className='mt-4 text-center'>
          <h1 className='text-2xl font-bold'>{judul}</h1>
          <p>{isi}</p>
        </div>
      </div>
    </div>
  )
}

export default Content
