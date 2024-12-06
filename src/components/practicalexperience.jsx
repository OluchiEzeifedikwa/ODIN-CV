import { useState } from "react"
// import GeneralInformation from "./generalInformation";


export default function PracticalExperience() {


    const[value, setValue] = useState({company:"", position:"",})
    // const[value1, setValue1] = useState("")
    const[displayName, setDisplayName] = useState('');
    // const[displayName1, setDisplayName1] = useState('')

    
    const handleInputChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value})
        // setValue1({value1, [e.target.name]: e.target.value1})
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayName(`${value.company} ${value.position}`);
        
        
    }

    
    

    return(
        <>
        
        <form onSubmit={handleSubmit}>
        <label htmlFor="company name">Company Name</label>
        <input 
        type="text" 
        name="company"
        value={value.company}
        onChange={handleInputChange}
        // onChange={{handleInputChange} = (event) => setValue((event.target.value)) }
        />

        <label htmlFor="position title">Position Title</label>
        <input 
        type="text" 
        name="position"
        value={value.position}
        onChange={handleInputChange}
        // onChange={(event) => setValue((event.target.value)) }
        />

        {/* <label htmlFor="responsibilities">Responsibilities</label>
        <input 
        type="text" 
        value={value} */}
        {/* // onChange={handleInputChange}
        // onChange={(event) => setValue((event.target.value)) }
        /> */}

        {/* <label htmlFor="date">Date</label>
        <input 
        type="date" 
        value={value} */}
        {/* // onChange={(event) => setValue((event.target.value)) }
        /> */} 
        <button>Edit</button>
        <button type="submit" >Submit</button>

       </form>
        <div>
            {displayName}
            
        </div>
    
        </>
    )

}