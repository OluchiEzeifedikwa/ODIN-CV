import { useState } from 'react';



export default function EducationalExperience() {
    const[value, setValue] = useState({school:"", title:"",date:""})
    const[displayName, setDisplayName] = useState("")
    // const[cardText, setCardText] = useState("");
    // const[isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayName(`${value.school} ${value.title} ${value.date}`)
    }

    // const handleEditClick = () => {
    //     setIsEditing(true);
    // }

    // const handleButtonClick = () => {
    //     // setCardText(value);
    //     setDisplayName(value);
    //     setValue("");
        
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
            type="date" 
            name="date"
            value={value.date}
            onChange={handleInputChange}
        // onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={handleSubmit} type="submit">Submit</button>

        

            {/* {/* {isEditing ? (
                <button type='submit'onSubmit={handleSubmit}>Edit</button>
                ) : (<button onClick={handleEditClick}>Edit</button>)} */}

                {/* {cardText && (
                    <div className='card'>
                        <p>{cardText}</p>
                        {displayName}
                    </div>
                )} */} */

        
        {/* <button onClick={handleEditClick}>Edit</button> */}
        {/* <button type="submit">Submit</button> */}
        </form>
        
       
        <div className='displayname'>
            {displayName ? (
                <p>School: {value.school} <br />
                Title: {value.title} <br />
                Date: {value.date}</p>
            ) : (
            <p>No data available</p>
            )}
        </div>
   
        </>
 )

}