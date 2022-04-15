import React from 'react';
import Input from '../utils/Input'; 


const Skills = ({cvData, handleChange}) => {
  return(
    <div className='m-auto mt-20 w-2/5 h-2/3 p-4 shadow-md'>
      <div id="header" className='flex'>
        <p className='flex text-1xl md:text-2xl lg:text-2xl items-center'>Skills</p>
      </div>
      <hr className='my-4'/>
      <div className='flex flex-col lg:flex-row md:flex-row m-1'>
        <Input 
          className={`w-full border-2 h-8 rounded-md mr-1 border-gray-200`}
          placeholder="Ex: Microsoft Office"
          name={"nameA"}
          value={cvData.nameA}
          onChange={handleChange}
          />
        <select className={`w-full border-2 h-8 rounded-md border-gray-200`} name="skillA" value={cvData.levelA} onChange={handleChange}>
          <option>Level</option>
          <option>Low</option>
          <option>Mid</option>
          <option>High</option>
        </select>
      </div>
      <div className='flex flex-col lg:flex-row md:flex-row m-1'>
        <Input 
          className={`w-full border-2 h-8 rounded-md mr-1 border-gray-200`}
          placeholder="Ex: Wolfram"
          name={"nameB"}
          value={cvData.nameB}
          onChange={handleChange}
          />
        <select className={`w-full border-2 h-8 rounded-md border-gray-200`} name="skillB" value={cvData.levelB} onChange={handleChange}>
          <option>Level</option>
          <option>Low</option>
          <option>Mid</option>
          <option>High</option>
        </select>
      </div>
      <div className='flex flex-col lg:flex-row md:flex-row m-1'>
        <Input 
          className={`w-full border-2 h-8 rounded-md mr-1 border-gray-200`}
          placeholder="Ex: C++"
          name="nameC"
          value={cvData.nameC}
          onChange={handleChange}
          />
        <select className={`w-full border-2 h-8 rounded-md border-gray-200`} name="skillC" value={cvData.levelC} onChange={handleChange}>
          <option>Level</option>
          <option>Low</option>
          <option>Mid</option>
          <option>High</option>
        </select>
      </div>
      <div className='flex flex-col lg:flex-row md:flex-row m-1'>
        <Input 
          className={`w-full border-2 h-8 rounded-md mr-1 border-gray-200`}
          placeholder="Ex: Microsoft Excel"
          name={"nameD"}
          value={cvData.nameD}
          onChange={handleChange}
          />
        <select className={`w-full border-2 h-8 rounded-md border-gray-200`} name="skillD" value={cvData.levelD} onChange={handleChange}>
          <option>Level</option>
          <option>Low</option>
          <option>Mid</option>
          <option>High</option>
        </select>
      </div>
      <div className='flex flex-col lg:flex-row md:flex-row m-1'>
        <Input 
          className={`w-full border-2 h-8 rounded-md mr-1 border-gray-200`}
          placeholder="Ex: Python"
          name={"nameE"}
          value={cvData.nameE}
          onChange={handleChange}
          />
        <select className={`w-full border-2 h-8 rounded-md border-gray-200`} name="skillE" value={cvData.levelE} onChange={handleChange}>
          <option>Level</option>
          <option>Low</option>
          <option>Mid</option>
          <option>High</option>
        </select>
      </div>
    </div>
  )
}

export default Skills;
