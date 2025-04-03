import React from 'react'
import Button from '../Todolist/Button'
import {Rating} from "@mui/material";

const Content = ({id, url,judul,isi}) => {
      
  
    return (
         <div className=''>
                <div key={id} className='m-3 shadow-md p-2 w-3/5 mx-auto container flex h-72 bg-white'>
                    <div className=' flex items-center w-1/4 justify-center p-2'>
                        <img src={url} alt="gambar" className=' w-60 h-full' />
                    </div>
                    <div className='w-3/5 p-2 relative h-full'>
                        <div className='space-y-1 '>
                            <h1 className=' text-2xl bold'>{judul}</h1>
                            <p>{isi}</p>
                        </div>
                        <div className='absolute right-0 bottom-2 w-full'>
                            <Rating name="half-rating" defaultValue={5} precision={1} className=' bottom-5' size='large' />
                            <Button className=" gap-6 "/>  
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Content
