
import './CreateTest.css'
import React, { useState } from 'react'
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import axios from 'axios'


export default  function CreateTest(){

    const [name, setName] =  useState('')
    const [email, setEmail] =  useState('')
    const [password, setPassword] =  useState('')
    const [phone, setPhone] =  useState('')
    const [statusIcon, setStatusicon] =  useState(false)

    const submit = async (e) => {
        e.preventDefault()
        if(email === '' && name === '' && password === '' && phone === ''){
            alert('กรุณากรอกข้อมูลให้ครบ!!')
            return
        }
        try {
            let data = await axios.post('http://localhost:4000/students/create',{name:name,email:email,password:password,phone:phone})
            console.log(data)
            setEmail('')
            setPassword('')
            setName('')
            setPhone('')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="create__main">
            <div className="create__head">สมัครสมาชิก</div>
            <div className="create__email">
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className="create__password">
                <input type={statusIcon ? "text" :"password"} placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                {!statusIcon ?
                    <AiFillEyeInvisible className="icon__password" onClick={()=>setStatusicon(true)} />
                    :
                    <AiFillEye className="icon__password"  onClick={()=>setStatusicon(false)} />
                } 
            </div>
            <div className="create__name">
                <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className="create__phone">
                <input type="tel" placeholder="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
            </div>
            <div className="create__submit">
                <button type="button" onClick={(e)=>submit(e)}>ยืนยัน</button>
            </div>
        </div>
    )
}