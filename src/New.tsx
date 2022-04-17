import React, { useEffect, useState } from "react";

import logo from './logo.svg';

import './App.css';

function Newpart(props:any) {

  const [name,setName] = useState('');
  const [amount,setAmount] = useState(1);

  const onUpload = () =>{
      props.upload(name,amount,"key.pdf");
      reset();
  }

  const reset = () =>{
    props.close();
  }


  const handleNameChange = (e:any) => {
    setName( e.target.value);
}

const handlAmountChange = (e:any) => {
  setAmount( e.target.value);
}

  return (
    <div className="new">
    
      <div> <input value={name}  onChange={(e)=>handleNameChange(e)} placeholder="Name" type="text"></input></div>
      <div> <input value={amount}  onChange={(e)=>handlAmountChange(e)} placeholder="Amount" type="number"></input></div>
      <div><input type="file" id="myfile" name="myfile"></input></div>
      <div onClick={onUpload} className="btn upload">Upload</div>
    </div>
  );
}

export default Newpart;
