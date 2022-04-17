import React, { useEffect, useState } from "react";

import logo from "./logo.svg";

import "./App.css";
import {useParts} from './Context/Parts';
import {useError} from './Context/ErrorContext';
import getID from './Shared/Id';



function Newpart(props: any) {

  const {addParts,getParts} = useParts();
  const {setErrorMsg,getError} = useError();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(1);
  const [file,setFile] = useState('');

  const onUpload = () => {
    if (!validate()) return;

    let part = {
      name: name,
      amount: amount,
      file_name: file,
      id:getID(7),
    };

    addParts(part);
    reset();
  };

  const validate = () => {
    if (name == "") {
      setErrorMsg("Please select name");
      return false;
    }
    if (amount < 1) {
      setErrorMsg("Amount should be at least 1!");
      return false;
    }

    if (file == '') {
      setErrorMsg("No file selected!");
      return false;
    }

    setErrorMsg("");

    return true;
  };

  const reset = () => {
    setErrorMsg("");
    setName('');
    setAmount(1);
    setFile('');
    hideFileAdd();
  };

 
  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handlAmountChange = (e: any) => {
    setAmount(e.target.value);
  };

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0].name);
  };

  const hideFileAdd = () => {
    setnewPart(false);
  };

  const showFileAdd = () => {
    setnewPart(true);
  };

  const [newPart, setnewPart] = useState(false);
  let parts: any = [];

  parts = getParts();

  return (
    <div className="new">
            {(parts.length < 1 &&  !newPart) && "Click below to add new parts!"}
            {!newPart && <div onClick={showFileAdd} className="btn">+ Add New   </div>}

      {newPart && <div className="parts_form">
      <div>
        {" "}
        <input
          value={name}
          onChange={(e) => handleNameChange(e)}
          placeholder="Name"
          type="text"
        ></input>
      </div>
      <div>
        {" "}
        <input
          value={amount}
          onChange={(e) => handlAmountChange(e)}
          placeholder="Amount"
          type="number"
        ></input>
      </div>
      <div>
        <input  onChange={(e) => handleFileChange(e)} type="file" id="myfile" name="myfile"></input>
      </div>
      <div onClick={onUpload} className="btn upload">  Upload</div>
      <div onClick={reset} className="btn"> Cancel </div>
      
      </div>}
    </div>
  );
}

export default Newpart;
