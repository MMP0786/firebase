// import { useState } from "react"
import React, {useState} from 'react'

function Form() {
    const [checked, setChecked] = useState();
    const [che, setChe] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        gender: false
    })

    const handleChange = (e)=>{
       
        setData({
            ...data, [e.target.name]: e.target.value,
            // [e.target.checked]: e.target.value
        })
        console.log(e.target.name, e.target.value)
    }

    const handleLag = (e)=>{
        const val = e.target.value;
        const check = e.target.checked
        console.log(val, check)
    }
  return (
    <div style={{margin: "auto", width:"50%"}}>
        <form >
            
        <div>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={data.name} onChange={handleChange} placeholder='enter the name' id="" />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={data.email} onChange={handleChange} id="" />
        </div>

        

        <div>
            <label htmlFor="email">Gender</label> <br></br>
            <label htmlFor="email">Male</label>
            <input type="radio" name="gender" value={"Male"} onChange={handleChange} id="" />
            <label htmlFor="email">Female</label>
            <input type="radio" name="gender" value={"female"} onChange={handleChange} id="" />
        </div>

        <div>
            <label htmlFor="email"> Language </label> <br></br>
            <label htmlFor="email"> Hindi </label> 
            <input type="checkbox" name="lag" value={"hindi"}  onChange={handleLag} id="" />
            <label htmlFor="email"> English </label> 
            <input type="checkbox" name="lag" value={"English"}  onChange={handleLag} id="" />
            <label htmlFor="email"> Urdu </label> 
            <input type="checkbox" name="lag" value={"Urdu"}  onChange={handleLag} id="" />
        </div>
        <div>
            <label htmlFor="email"> Terms and condition</label>
            <input type="checkbox" checked={checked} onChange={(e)=> setChecked(e.target.checked)} id="" />
        </div>

        <div>
            <input type="submit" value="Stubmit" />
        </div>
    
        </form>
    </div>
  )
}

export default Form