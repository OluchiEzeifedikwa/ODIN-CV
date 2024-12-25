//  import { useState } from 'react';
import React from "react";

export default function EducationalExperience({value, handleInputChange}) {
  return (
    <div>
      <label htmlFor="school">School:</label>
      <input type="text" name="school" value={value.school} onChange={handleInputChange} />
      <label htmlFor="title">Title Of Study:</label>
      <input type="text" name="title" value={value.title} onChange={handleInputChange} />
      <label htmlFor="date">Date Of Study:</label>
      <input type="date" name="date" value={value.date} onChange={handleInputChange} />
    </div>
  );
}
