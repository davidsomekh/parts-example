import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import Part from "./Part";

import "./App.css";

function List() {
  const [parts, setParts] = useState([
    {
      name: "Wheel",
      id: "wheel",
      amount: 8,
      file_name: "wheel.sldprt",
    },
    {
      name: "Chair",
      id: "chair",
      amount: 2,
      file_name: "chair new.sldprt",
    },
    {
      name: "Engine22",
      id: "engine",
      amount: 1,
      file_name: "engine_v1.sldprt",
    },
  ]);

  return (
    <div className="list">
      {parts.map((btn) => {
        return (
          <Part key={btn.name} amount={btn.amount} name={btn.name}/>
        );
      })}
    </div>
  );
}

export default List;
