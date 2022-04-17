import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import Part from "./Part";

import "./App.css";

function List(props:any) {
  
  return (
    <div className="list">
      {props.parts.map((btn:any) => {
        return (
          <Part key={btn.id} amount={btn.amount} name={btn.name}/>
        );
      })}
    </div>
  );
}

export default List;
