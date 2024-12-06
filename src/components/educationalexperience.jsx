import { useState } from 'react';


export default function EducationalExperience() {
    const[value, setValue] = useState({school:"", title:"",date:""})
    const[displayName, setDisplayName] = useState("")
    const[isEditing, setIsEditing] = useState(false)

    const handleInputChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayName(`${value.school} ${value.title} ${value.date}`)
    }

    const handleEditClick = () => {
        setIsEditing(true);
    }

    // const handleSaveClick = () => {
    //     setIsEditing(false);
    // }



    return (
        <>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="schoolname">School:</label>
            <input
            type="text"
            name="school"
            value={value.school}
            onChange={handleInputChange} />
            {/* ) : */}
           {/* (<h1>{value.school}</h1> ) */}
           {/* {isEditing ? (
            <button onClick={handleSaveClick}>Save</button>
           ) : (<button onClick={handleEditClick}>Edit</button>)} */}

           <label htmlFor="title of study">Title Of Study:</label>
           <input 
           type="text" 
           name="title"
           value={value.title}
           onChange={handleInputChange}
        // onChange={(event) => setValue(event.target.value)}
        />

            <label htmlFor="date of study">Date Of Study:</label>
            <input 
            type="text" 
            name="date"
            value={value.date}
            onChange={handleInputChange}
        // onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">Save</button>
            {isEditing ? (
                <button type='submit'onSubmit={handleSubmit}>Edit</button>
                ) : (<button onClick={handleEditClick}>Edit</button>)}

        
        {/* <button onClick={handleEditClick}>Edit</button> */}
        {/* <button type="submit">Submit</button> */}
        </form>
        <div>
            {displayName}
        </div>

        
        
        </>
    )

}