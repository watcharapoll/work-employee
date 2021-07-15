
import './EditTest.css'
import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'

export default  function EditTest() {
    const history = useHistory()
    const params = useParams()
    const [name, setName] =  useState('')
    const [email, setEmail] =  useState('')
    const [phone, setPhone] =  useState('')

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const query = queryParams.get('id')

    const submit = async (e) => {
        e.preventDefault()
        if(email === '' && name === '' && phone === ''){
            alert('กรุณากรอกข้อมูลให้ครบ!!')
            return
        }
        try {
            let data = await axios.put(`http://localhost:4000/students/editdata/?id=${query}`,{name:name,email:email,phone:phone})
            console.log(data)
            history.push('/view')
        } catch (error) {
            console.log(error)
        }
    }
    async function getdata() {
        console.log(params.id)
        console.log(query)
        if(query === null || query === '') return
        let { data } = await axios.get(`http://localhost:4000/students/getdata/?id=${query}`)
        console.log(data)
        setName(data.msg.name)
        setEmail(data.msg.email)
        setPhone(data.msg.phone)
    }
    useEffect(()=>{
        getdata()
    },[])
    return(
        <div className="edit__main">
            <div className="edit__head">แก้ไขสมาชิก</div>
            <div className="edit__name">
            <input type="text" placeholder="name" label="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className="edit__email">
            <input type="email" placeholder="email" label="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className="edit__phone">
            <input type="tel" placeholder="phone" label="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
            </div>
            <div className="edit__submit">
            <button type="button" onClick={(e)=>submit(e)}>Update</button>
            </div>
        </div>
    )
}