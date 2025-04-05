import React, { useEffect, useState } from 'react'
import Content from './Content'
import AddItem from './AddItem'
import gambar1 from "../../Assets/Login.png"
import gambar2 from  "../../Assets/Login1.png"
import axios from "axios"

const TambahGambar = () => {
   
    const [images,setImages] = useState([])
    const [file,setFile] = useState(null)
    const [loading,setLoading] = useState(true)

    const getImages = () => {
        try{
            // Ambil Token
            const token = localStorage.getItem("token-kedua")
            if(!token) {
                console.log("Token tidak ditmeukan")
                setLoading(false)
                return;
            }
            
            // Set Header
            const config = {
                headers : {
                    "nama-token" : token
                }
            }

            axios.get(`${process.env.REACT_APP_BASE_URL}/images`,config)
            .then(res => {
                setImages(res.data)
                setLoading(false)
            })
        }catch(err){
            setLoading(true)
        }
    }

    // Upload
    const uploadImage = async() => {
        if(!file) {
            console.log("Tidak ada file yang dipilih")
            return ;
        }

        const token = localStorage.getItem("token-kedua")
        if(!token){
            return;
        }

        const config = {
            headers : {
                "Content-Type" : "multipart/form-data",
                "nama-token" : token
            }
        }

        const formData = new FormData();
        formData.append("gambar",file)

        try{
            // Mengirim file ke server
            await axios.post(`${process.env.REACT_APP_BASE_URL}/images`, formData, config)
            getImages();
        }catch(err){
            console.error("Error pada gambar : " +err)
        }
    }

    // Ambil gambar dari Server
    useEffect(() => {
        getImages()
    },[])

    if(loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            {/* <AddItem/> */}
            <input type="file"
            onChange={(e) => setFile(e.target.files[0])}
            />
            <button onClick={uploadImage}>Upload Gambar</button>

            {images.map((item,index) => (
                <div key={index}>
                    <Content id={item.id} url={item.url} judul={item.judul} isi={item.isi}  />
                </div>
            ))}
           {/* <Content /> */}
        </div>
  )
}

export default TambahGambar
