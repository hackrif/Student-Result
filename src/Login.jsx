 import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function Login(){
  const navigate = useNavigate();
  const [pwd,setPwd]=useState();
  const handlePwd=(e)=>{
    setPwd(e.target.value)
  }
  function login(){
    let p=12345;
    if(p==pwd){
      alert("Login Success")
      navigate("/App");
    }else{
      alert("Login Failed");
    }
  }

  return(
    <>
    <h1>Student Login</h1>
    <Form.Control type="text" onChange={handlePwd} placeholder="Enter Password" /> <br />
    <Button variant="outline-success" onClick={login}>Login</Button>

    </> 
  )
}
