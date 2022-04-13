import React, {useState} from 'react';
import { IoMdContact } from 'react-icons/io';
import Input from '../utils/Input';
import Area from '../utils/Area';

const Profile = ({cvData, handleChange, wrong}) => {
  
  return(
    <div className='m-auto mt-52 w-2/5 h-2/3 p-4 shadow-md'>
      <div id="header" className='flex'>
        <p className='animate-fadeIn-3 flex text-1xl md:text-2xl lg:text-2xl items-center'><IoMdContact /> Personal Data</p>
      </div>
      <hr className='my-4'/>
      <div className='flex flex-col lg:flex-row md:flex-row m-1'>
        <Input 
          className={`w-full border-2 h-8 rounded-md mr-1 ${wrong ? "border-red-500 transition duration-500 animate-bounce" : "border-gray-200"}`}
          placeholder="First name*"
          name="firstName"
          value={cvData.firstName}
          onChange={handleChange}
          />
        <Input 
          className={`w-full border-2 h-8 rounded-md ${wrong ? 'border-red-500 transition duration-500 animate-bounce' : "border-gray-200"}`}
          placeholder="Last name*"
          name="lastName"
          value={cvData.lastName}
          onChange={handleChange}
          />
      </div>
      <div className='flex flex-col lg:flex-row md:flex-row m-1'>
        <Input 
          className={`w-full border-2 h-8 rounded-md mr-1 ${wrong ? 'border-red-500 transition duration-500 animate-bounce' : "border-gray-200"}`}
          placeholder="Email*"
          name="email"
          value={cvData.email}
          onChange={handleChange}
          />
        <Input 
          className={'w-full border-2 border-gray-200 h-8 rounded-md'}
          placeholder="Phone number"
          name="phone"
          value={cvData.phone}
          onChange={handleChange}
          />
      </div>
      <div className='m-1'>
        <Input 
          className={'w-full border-2 border-gray-200 h-8 rounded-md '}
          placeholder="Direction"
          name="userDirection"
          value={cvData.userDirection}
          onChange={handleChange}
          />
      </div>
      <div className='flex flex-col lg:flex-row md:flex-row m-1'>
        <Input 
          className={'w-full border-2 border-gray-200 h-8 rounded-md mr-1'}
          placeholder="Postal code"
          name="userPostal"
          value={cvData.userPostal}
          onChange={handleChange}
          />
        <Input 
          className={'w-full border-2 border-gray-200 h-8 rounded-md'}
          placeholder="City/Location"
          name="userLocation"
          value={cvData.userLocation}
          onChange={handleChange}
          />
      </div>
      <div className='m-1'>
        <Area 
          className={'w-full border-2 border-gray-200 resize-none rounded-md h-36'}
          placeholder="Give a description about yourself and your professional life"
          name="userDescription"
          value={cvData.userDescription}
          onChange={handleChange}
          />
      </div>
    </div>
  )
}

export default Profile;
