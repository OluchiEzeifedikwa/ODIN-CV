// import React from 'react';
import GeneralInformation from './components/generalInformation'
import EducationalExperience from './components/EducationalExperience'
import PracticalExperience from './components/practicalexperience'
import './index.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState({
    school:"", 
    title:"",
    date:"",
    name:"",
    email:"",
    phone:"",
    company:"",
    position:"",
  });
  
  const[displayName, setDisplayName] = useState("")

  const handleInputChange = (e) => {
    setValue({...value, [e.target.name]: e.target.value})

}

const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayName(`${value.school} ${value.title} ${value.date} ${value.name} ${value.email} ${value.phone} ${value.company} ${value.position}`)
}


  return (
    <>
    <div>
      <h1>ODIN-CV</h1>
      <form onSubmit={handleSubmit}>
      <GeneralInformation
      value = {value}
      handleInputChange = {handleInputChange}
      />


      <EducationalExperience
      value = {value}
      handleInputChange = {handleInputChange}
      />
      
      <PracticalExperience 
      value = {value}
      handleInputChange = {handleInputChange}
      />
      <button type='submit'>Submit</button>
      </form>
            {displayName ? (
              <div className='displayname'>
                
                <h2>EDUCATIONAL EXPERIENCE</h2>
                <p>School: {value.school} <br />
                Title: {value.title} <br />
                Date: {value.date}<br />
                <hr />
                <h2>GENERAL INFORMATION</h2>
                Name: {value.name} <br />
                Email: {value.email} <br />
                Phone: {value.phone}<br />
                <hr />
                <h2>PRACTICAL EXPERIENCE</h2>
                Company: {value.company} <br />
                position: {value.position} <br />
                </p>
                </div>
            ) : (
            <p>No data available</p>
          )}
    </div>
  
 
    
    


    {/* <h1>ODIN CV APPLICATION</h1> */}
    {/* <GeneralInformation />
    <EducationalExperience />
    <PracticalExperience /> */}

    
    </>
  )
};
  


export default App;
