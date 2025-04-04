import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Inputan from '../Todolist/Inputan'
import Content from '../TambahGambar/Content'

const Beranda = () => {
  const [data,setData ] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    try{
      const token = localStorage.getItem("token-kedua")
      if(!token){
        console.log("Token tidak ditemukan")
        setLoading(false)
        return;
      }

      //Set Header
      const config = {
        headers : {
          "nama-token" : token
        }
      }

        axios.get(`${process.env.REACT_APP_BASE_URL}/beranda`,config)
        .then(res => {
          console.log(res.data)
          setData(res.data)
          setLoading(false)
        }
      )
    }catch(err){
      setLoading(true)
    }

  },[])

  if(loading){
    return <p>Loading...</p>
  }


  return (
    <div>
      {data.map((item,index) => (
        <div>
          {item.url ? (
            <div key={index}>
              <Content id={item.id} url={item.url} judul={item.judul} isi={item.isi}  />
            </div>
          ) : (
            <div className='p-2 flex container mx-auto w-8/12 mt-3 shadow-md bg-white' key={index}>
                    <Inputan title={item.isi} status={item.checked} />
                    
                </div>
          )}

        </div>
      ))}
    </div>
  )
}

export default Beranda
