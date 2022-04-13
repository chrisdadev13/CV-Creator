import React, {useState} from 'react';
import WorkExp from './WorkExp';

const CVProfessional = ({cvData, handleChange, addToJobStore}) => {
  return(
    <WorkExp cvData={cvData} handleChange={handleChange} addToStore={addToJobStore}/>  
  )
}

export default CVProfessional;
