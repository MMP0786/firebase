import React, { useState } from 'react'

function ObjectWithUs() {
    const obj ={
        name: "Musharraf",
        surname: "Panwaar",
        gender: "Male",
        isMarried: false
    }
    const [person, setPerson] = useState(obj)

    const handleChange = ()=>{
        setPerson(pre=>{
            return {
                ...pre, name:"King"
            }
        })
    }
  return (
    <>
    <div>{person.name}</div>
    <div>{person.surname}</div>
    <div>{person.gender}</div>
    <div>{person.isMarried.toString()}</div>
    
    <button onClick={handleChange}>Update</button>
    </>
  )
}

export default ObjectWithUs