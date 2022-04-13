import React, {useState} from 'react';
import { IoBusiness } from 'react-icons/io5'
import Input from '../utils/Input';
import Area from '../utils/Area';
import Button from '../utils/Button';

const WorkExp = ({cvData, handleChange, addToStore}) => {

  const [workAdded, addWork] = useState([]);

  return(
    <div className='m-auto mt-52 w-2/5 h-2/3 p-4 shadow-md'>
      <div id="header" className='flex'>
        <p className='flex text-1xl md:text-2xl lg:text-2xl items-center'><IoBusiness /> Work Experience</p>
      </div>
      <hr className='my-4'/>
      <div className='flex flex-col lg:flex-row md:flex-row m-1'>
        <Input 
          className={`w-full border-2 h-8 rounded-md mr-1 border-gray-200`}
          placeholder="What was/is your job title?"
          name="jobTitle"
          value={cvData.jobTittle}
          onChange={handleChange}
          />
        <Input 
          className={`w-full border-2 h-8 rounded-md border-gray-200`}
          placeholder="City/Location"
          name="jobLocation"
          value={cvData.jobLocation}
          onChange={handleChange}
          />
      </div>
      <div className='m-1'>
        <Input 
          className={'w-full border-2 border-gray-200 h-8 rounded-md '}
          placeholder="Employer 'Ex: McDonalds'"
          name="jobDirection"
          value={cvData.jobDirection}
          onChange={handleChange}
          />
      </div>
      <div className='flex flex-col lg:flex-row md:flex-row m-1'>
        <input 
          type="date"
          className={'w-full border-2 border-gray-200 h-8 rounded-md mr-1'}
          name="jobStart"
          value={cvData.jobStart}
          onChange={handleChange}
          />
        <input 
          type="date"
          className={'w-full border-2 border-gray-200 h-8 rounded-md'}
          name="jobEnd"
          value={cvData.jobEnd}
          onChange={handleChange}
          />
      </div>
      <div className='m-1'>
        <Area 
          className={'w-full border-2 border-gray-200 resize-none rounded-md h-36'}
          placeholder="Give a description about what you do or what you used to do in your job"
          name="jobDescription"
          value={cvData.jobDescription}
          onChange={handleChange}
          />
      </div>
      <div className='flex items-center justify-center'>
        <Button action={"Add data"} setAction={addToStore} className={"bg-blue-400 text-white rounded-md"}></Button>
      </div>
    </div>
  )
}

export default WorkExp;
