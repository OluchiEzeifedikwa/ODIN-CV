// import { useState } from "react"
import React from "react";

export default function GeneralInformation({value, handleInputChange}) {
    return (
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={value.name} onChange={handleInputChange} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={value.email} onChange={handleInputChange} />
        <label htmlFor="phone">Phone:</label>
        <input type="number" name="phone" value={value.phone} onChange={handleInputChange} />
      </div>
    );
  }
  
