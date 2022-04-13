import React, { useState } from 'react';
import Button from './utils/Button';
import CVForm from './CVForm/CVForm';

const Main = () => {
  const [ cv, setCv ] = useState({});

  const handleCvData = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setCv({
      ...cv,
      [name]: value
    })
  }

  const [error, setError] = useState(false);

  const formError = () => {
    if(cv.firstName == undefined || cv.firstName == "" && cv.lastName == undefined || cv.lastName == "" && cv.userEmail == undefined || cv.userEmail == ""){
      setError(error => true)
      return error;
    }else if(cv.firstName != undefined && cv.lastName != undefined && cv.userEmail != undefined){
      setError(error => false)
      return error;
    }
  }

  const [page, setPage] = useState(0);

  const nextPage = () => {
    let canChange = formError();
    let advance = true;
    if(canChange == false){
      console.log("we have an error")
      advance = false;
    }else if(advance == true){
      setPage(page => page = 1)
    }
    console.log(page);
  }

  const goBack = () => {
    if(page == 1){
      setPage(page => page = 0)
      setError(error => error = false)
    }
  } 

  const saveAll = () => {
    console.log("Holaaa");
  }
  return(
    <>
      {page == 0 &&
        <CVForm cvData={cv} handleChange={handleCvData} error={error}/>
      }
      {page == 1 &&
        <h1>Hola</h1>
      }
      <div className='flex items-center justify-center'>
      {page == 1 &&
        <Button setAction={goBack} action={"Go back"} className={"bg-blue-400 text-white p-4 rounded-md mt-12 hover:bg-blue-700 transition duration-500"}></Button>
      }
        <Button setAction={page == 0 ? nextPage : saveAll} action={page == 0 ? "Next Step" : "Save all"} className={"bg-blue-400 text-white p-4 rounded-md mt-12 hover:bg-blue-700 transition duration-500"}></Button>
      </div>
    </>
  )
}

export default Main;
