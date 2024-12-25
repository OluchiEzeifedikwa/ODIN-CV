   
import React from "react";

export default function PracticalExperience({value, handleInputChange}) {
    return (
      <div>
        <label htmlFor="company">Company:</label>
        <input type="text" name="company" value={value.company} onChange={handleInputChange} />
        <label htmlFor="position">Position:</label>
        <input type="position" name="position" value={value.position} onChange={handleInputChange} />
      </div>
    );
  }
  