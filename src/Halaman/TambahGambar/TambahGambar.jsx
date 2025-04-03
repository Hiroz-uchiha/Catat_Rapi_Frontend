import React, { useEffect, useState } from 'react'
import Content from './Content'
import AddItem from './AddItem'
import gambar1 from "../../Assets/Login.png"
import gambar2 from  "../../Assets/Login1.png"
import axios from "axios"

const TambahGambar = () => {
    const gambar = [
        {
            id : 1,
            url : gambar1,
            judul : "Gambar Pertama",
            isi : "Ini adalah contoh gambar pertama lorem  ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. "
        },
        {
            id : 2,
            url : gambar2,
            judul : "Gambar Kedua",
            isi : "Ini adalah contoh gambar kedua lorem  ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. "
        },
        {
            id : 3,
            url : gambar2,
            judul : "Gambar Ketiga",
            isi : "Ini adalah contoh gambar kedua lorem  ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. "
        },
        {
            id : 4,
            url : gambar1,
            judul : "Gambar Keempat",
            isi : "Ini adalah contoh gambar kedua lorem  ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. "
        },
    ]

    const [images,setImages] = useState([])
    const [file,setFile] = useState(null)

    const getImages = () => {
        axios.get("http://localhost:3001/images")
        .then(res => {
            setImages(res.data)
        })
    }

    // Upload
    const uploadImage = async() => {
        if(!file) {
            console.log("Tidak ada file yang dipilih")
            return ;
        }

        const formData = new FormData();
        formData.append("gambar",file)

        try{
            // Mengirim file ke server
            await axios.post("http://localhost:3001/images", formData, {
                headers : {
                    "Content-Type" : "multipart/form-data"
                }
             })
            getImages();
        }catch(err){
            console.error("Error pada gambar : " +err)
        }
    }

    // Ambil gambar dari Server
    useEffect(() => {
        getImages()
    },[])

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
