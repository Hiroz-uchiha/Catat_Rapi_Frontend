import React, { useEffect, useState } from 'react'
import Button from './Button'
import Inputan from './Inputan'
import axios from 'axios';

const Todolist = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [inputValue,setInputValue] = useState("");
    
    //1. Ambil Data dari database
    const getData = async() => {
        try{
            // Ambil Token
            const token = localStorage.getItem("token-kedua")
            if(!token){
                console.log("Token tidak ditemukan")
                setLoading(false)
                return;
            }

            // Set header
            const config = {
                headers : {
                    "nama-token" : token
                }
            }
            
            axios.get("http://localhost:3001/todo/todo",config)
            .then(res => {
                setData(res.data);
                setLoading(false)
            })
        }catch(err){
            setLoading(true);
        }
    }

    //2. Ubah status checked
    const handleChangeStatus = async(id) => {
        const currentStatus = data.find(item => item._id ===id);

        if(!currentStatus){
            return;
        }

        const update = {
            checked : !currentStatus.checked
        }

        try{
           await axios.patch("http://localhost:3001/todo/todo/" + id,update)
            .then(res => {
                getData();
            })

        }catch(err){
            console.log(err)
        }
    }

    //3. Tambah data
    const addData = async() => {
       try{
        // Ambil token
        const token = localStorage.getItem("token-kedua");
        if(!token) {
            console.log("Token invalid")
            return ;
        }

        // Set header
        const config = {
            headers : {
                "nama-token" : token
            }
        }

        const datas = {
            isi : inputValue
        }
        axios.post("http://localhost:3001/todo/todo",datas,config)
        .then(res => {
            setInputValue("");
            getData();
        })
       }catch(err){
        console.log(err)
       } 
    }

    //4. Hapus data
    const deleteData = (id) => {
        try{
            // Ambil token 
            const token = localStorage.getItem("token-kedua")

            // Atur header
            const config = {
                headers : {
                    "nama-token" : token
                }
            }

            // console.log("Delete " + id)
            axios.delete("http://localhost:3001/todo/todo/" + id, config)
            .then(res => {
                getData();
            })
        }catch(err){
            console.log(err)
        }
    }

    //5. Update data
    const updateData = (id) => {
        console.log("Update " + id)
    }

    useEffect(() => {
        getData();
    },[])

    if(loading){
        return <p>Loading...</p>
    }
    return (
        <div>
            <div className='flex justify-center w-8/12 mx-auto mt-3'>
                <input type="text" className='w-96 p-2 shadow-md outline-none' onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
                <button className='bg-blue-200 p-2 shadow-md' onClick={addData}>Tambah</button>
            </div>
            {data.map((item,index) => (
                <div className='p-2 flex container mx-auto w-8/12 mt-3 shadow-md bg-white' key={index}>
                    <Inputan title={item.isi} status={item.checked} onChange={() => handleChangeStatus(item._id)} />
                    <Button onUpdate={() => updateData(item._id) } onDelete={() => deleteData(item._id)} />
                </div>
            ))}
        </div>
    )
}

export default Todolist
