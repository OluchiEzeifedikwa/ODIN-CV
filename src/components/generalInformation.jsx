import { useState } from "react"

export default function GeneralInformation() {
    const[value, setValue] = useState({name:"", email:"", phone:""})
    const[displayName, setDisplayName] = useState("")

    const handleInputChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayName(`${value.name} ${value.email} ${value.phone}`)

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
        type="text" 
        name="name"
        value={value.name}
        onChange={handleInputChange}
        // onChange={(event) => setValue(event.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input 
        type="email" 
        name="email"
        value={value.email}
        onChange={handleInputChange}
        // onChange={(event) => setValue(event.target.value)}
        />

        <label htmlFor="phone">Phone:</label>
        <input 
        type="number" 
        name="phone"
        value={value.phone}
        onChange={handleInputChange}
        // onChange={(event) => setValue(event.target.value)}
        />
        <button>Edit</button>
        <button type="submit">Submit</button>
        </form>
        <div>
            {displayName}
        </div>
        </>
    )
    
}
