import React, { useEffect, useState } from "react";

import logo from './logo.svg';

import './App.css';

function Newpart() {



  return (
    <div className="new">
    
      <div> <input placeholder="Name" type="text"></input></div>
      <div> <input placeholder="Amount" type="number"></input></div>
      <div><input type="file" id="myfile" name="myfile"></input></div>
      <div className="btn upload">Upload</div>
    </div>
  );
}

export default Newpart;
