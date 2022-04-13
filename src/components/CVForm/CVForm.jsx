import React from 'react';
import Profile from './Profile';

const CVForm = ({cvData, handleChange, error}) => {
  return(
    <div>
      <Profile cvData={cvData} handleChange={handleChange} wrong={error}/>
    </div>
  )
}

export default CVForm;
