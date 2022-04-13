import React, { useEffect, useState } from "react";

import logo from './logo.svg';

import './App.css';
import Newpart from './New';



function App() {

  const [newPart,setnewPart] = useState(false);

  const showFileAdd= () => {

    setnewPart(true);

   }


  return (
    <div className="App">
    <div className='head'>Parts</div>

    <div onClick={showFileAdd}className='btn'>+ Add New</div>

    {newPart && 
      <Newpart/>}
    </div>
  );
}

export default App;
