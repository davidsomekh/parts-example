import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import Part from "./Part";

import "./App.css";

function List(props:any) {
  
  return (
    <div className="list">
      {props.parts.map((prt:any) => {
   
        return (
          <Part key={prt.id} amount={prt.amount} name={prt.name} file={prt.file_name}/>
        );
      })}
    </div>
  );
}

export default List;
