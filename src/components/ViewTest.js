import './ViewTest.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory} from 'react-router-dom'

export default  function ViewTest(){
    const history = useHistory()
    const [dataAll, setDataAll] = useState([])
    const [height, setHeight] = useState(window.innerHeight - 150)

    const editData = (id)=>{
        console.log(id)
        history.push('/edit?id='+id)
    }
    const deleteData = async (id)=>{
        try {
            let { data } = await axios.delete('http://localhost:4000/students/deletedata/'+ id)
            console.log(data)
            getdata()
        } catch (error) {
                console.log(error)
        }
    }
    async function getdata() {
        let { data } = await axios.get('http://localhost:4000/students/')
        setDataAll(data.msg)
    }
    useEffect(()=>{
        getdata()
        console.log(height)
    },[])
    return(
        <div className="view__main" style={{height: height}}>
            {dataAll.length !== 0 && <div className="view__name">รายชื่อ</div>}
            {dataAll.length !== 0 && (
                <div className="view__card" >
                    {dataAll.map((el,index)=>{
                        return(
                            <div key={index} className="view__card__content">
                                <div className="view__card__index">{index}</div>
                                <div className="view__card__name">name : {el.name}</div>
                                <div className="view__card__email">email : {el.email}</div>
                                <div className="view__card__phone">phone : {el.phone}</div>
                                <div className="view__card__action">
                                    <button type="button" className="view__btn__edit" onClick={()=>editData(el._id)}>Edit</button>
                                    <button type="button" className="view__btn__delete" onClick={()=>deleteData(el._id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}