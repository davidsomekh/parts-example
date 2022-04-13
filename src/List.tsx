import React, { useEffect, useState } from "react";

import logo from './logo.svg';
import Part from './Part';

import './App.css';



function List() {

  const [parts,setParts] = useState([
    {
      name: "Wheel",
      amount: 8,
      file_name: "wheel.sldprt"
    },
    {
      name: "Chair",
      amount:2,
      file_name: "chair new.sldprt"
    },
    {
      name: "Engine",
      amount: 1,
      file_name: "engine_v1.sldprt"
    },
  ]);

  const getParts= () => {

    return '<div>g</div>'

   }

  return (
    <div className="list">
      
      existing parts show here
      {getParts()}
    </div>
  );
}

export default List;
