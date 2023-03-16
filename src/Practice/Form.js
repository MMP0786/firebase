import React from 'react'

function Form() {
    const [data, setData] = useState({
        name: '',
        email: ''
    })
  return (
    <div>
        <div>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={data.name} placeholder='enter the name' id="" />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={data.email} id="" />
        </div>
    </div>
  )
}

export default Form