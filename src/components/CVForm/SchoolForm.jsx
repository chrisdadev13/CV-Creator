import React from 'react';
import { IoBook } from "react-icons/io5";
import Input from '../utils/Input';
import Area from '../utils/Area';
import Button from '../utils/Button';

const SchoolForm = ({cvData, handleChange, addToStore}) => {
  return(
    <div className='m-auto mt-52 w-2/5 h-2/3 p-4 shadow-md'>
      <div id="header" className='flex'>
        <p className='flex text-1xl md:text-2xl lg:text-2xl items-center'><IoBook /> Studies and Certifications</p>
      </div>
      <hr className='my-4'/>
      <div className='flex flex-col lg:flex-row md:flex-row m-1'>
        <Input 
          className={`w-full border-2 h-8 rounded-md mr-1 border-gray-200`}
          placeholder="What did you study? Ex: Economy"
          name="acaCareer"
          value={cvData.acaCareer}
          onChange={handleChange}
          />
        <Input 
          className={`w-full border-2 h-8 rounded-md border-gray-200`}
          placeholder="City/Location"
          name="acaLocation"
          value={cvData.acaLocation}
          onChange={handleChange}
          />
      </div>
      <div className='m-1'>
        <Input 
          className={'w-full border-2 border-gray-200 h-8 rounded-md '}
          placeholder="College or institution? 'Ex: Harvard'"
          name="acaCollege"
          value={cvData.acaCollege}
          onChange={handleChange}
          />
      </div>
      <div className='flex flex-col lg:flex-row md:flex-row m-1'>
        <input 
          type="date"
          className={'w-full border-2 border-gray-200 h-8 rounded-md mr-1'}
          name="acaStart"
          value={cvData.acaStart}
          onChange={handleChange}
          />
        <input 
          type="date"
          className={'w-full border-2 border-gray-200 h-8 rounded-md'}
          name="acaEnd"
          value={cvData.acaEnd}
          onChange={handleChange}
          />
      </div>
      <div className='m-1'>
        <Area 
          className={'w-full border-2 border-gray-200 resize-none rounded-md h-36'}
          placeholder="Give a description about what did you learn"
          name="jobDescription"
          value={cvData.acaDescription}
          onChange={handleChange}
          />
      </div>
      <div className='flex items-center justify-center'>
        <Button action={"Add data"} setAction={addToStore} className={"bg-blue-400 text-white rounded-md p-2 mt-2"}></Button>
      </div>
    </div>

  )
}

export default SchoolForm;
