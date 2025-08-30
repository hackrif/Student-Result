import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css'

function App() {
  const [nm, setName] = useState("");
  const [s1, setS1] = useState(0);
  const [s2, setS2] = useState(0);
  const [s3, setS3] = useState(0);
  const [ttl, setTtl] = useState(0);
  const [per, setPer] = useState(0);
  const [gd, setGrd] = useState("");
  const handleName=(e)=>{ 
    setName(e.target.value);
  }
  const handleS1=(e)=>{
      setS1(e.target.value);
  }
  const handleS2=(e)=>{
    setS2(e.target.value);
  }
  const handleS3=(e)=>{
    setS3(e.target.value);
  }
  const getres=(e)=>{
    if((Number(s1)>100  ||Number(s2)>100 ||Number(s3)>100)){
      alert("Marks should be less than 100")
    }else{
    setTtl(Number(s1)+Number(s2)+Number(s3))
    setPer((Number(s1)+Number(s2)+Number(s3))/3)
    let p=(Number(s1)+Number(s2)+Number(s3))/3;

     if(p>=75){
      setGrd("O")
    }else if(p<75 && p>=60){
      setGrd("A")
     }
     else if (p<60 && p>=50){
      setGrd("B");
     }
     else if(p<50 && p>=40){
      setGrd("C");
     }else{
      setGrd("FAIL");
     }
    }
  }
  return (
    <>
     <h1>Student Result System</h1>
     <Form.Control type="text" onChange={handleName} placeholder="Enter Student Name" />

     <br />
     <Form.Control type="number" onChange={handleS1} placeholder="Enter Subject 1 Marks" />
     <br />
     <Form.Control type="number" onChange={handleS2} placeholder="Enter Subject 2 Marks" />
     <br />
     <Form.Control type="number" onChange={handleS3} placeholder="Enter Subject 3 Marks" />
     <br />
     <Button variant="outline-success" onClick={getres}>Get Result</Button>
     <br />
     <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Name={nm}</ListGroup.Item>
        <ListGroup.Item>Total={ttl}</ListGroup.Item>
        <ListGroup.Item>Percentage %={per}</ListGroup.Item>
        <ListGroup.Item>Grade={gd}</ListGroup.Item>
      </ListGroup>
    </Card>
    </>
  )
}

export default App
