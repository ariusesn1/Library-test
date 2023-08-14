import { Fragment, useEffect } from "react";
import Header from "./Header";
import {TokenContext} from "../../store/Token-contex"
import axios from "axios";
import {useState}from 'react'
import { useNavigate } from "react-router-dom";
function DefaultLayout({children}) {
  const [check,setCheck]=useState(false)
    const handleAddCheck =()=>{
        setCheck(true) 
    }
    const handleRemoveCheck = ()=>{
      checkToken.checkToken = false
    }
  const checkToken ={
    checkToken:false,
    addCheck:handleAddCheck,
    removeCheck:handleRemoveCheck
  }

  return (
    <TokenContext.Provider value={checkToken}>
       <Fragment>
    <Header />
      <div className="content">{children}</div>
  </Fragment>
    </TokenContext.Provider>
    
  );
}

export default DefaultLayout;
