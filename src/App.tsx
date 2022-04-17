import React, { useEffect, useState } from "react";

import logo from './logo.svg';

import './App.css';
import Newpart from './New';
import List from './List';
import { stringify } from "querystring";


function App() {

  function makeid(length:number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

interface newpart {
  name:string,
  amount:number,
  id:string,
  file_name:string
}

  const [parts, setParts] = useState<newpart[]>([]); 

  const getID = () =>
  {
    return 'dave';
  }

  const addPart = (name:string,amount:number,fileName:string) => {
    let part = {name:name,amount:amount,file_name:fileName,id:makeid(6)};
    setParts([...parts,part])
   // setParts{...parts,part};
   }


  const [newPart,setnewPart] = useState(false);

  const showFileAdd= () => {

    setnewPart(true);

   }

   const hideFileAdd = () => {
    setnewPart(false);
   }

   


  return (
    <div className="App">
    <div className='head'>Parts</div>
    <List parts={parts}/>
    {parts.length == 0 && 'Click below to add new parts!'}
    <div onClick={showFileAdd}className='btn'>+ Add New</div>
    
    {newPart && <Newpart close ={hideFileAdd} upload={addPart}/>}
    </div>
  );
}

export default App;
