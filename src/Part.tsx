import React, { useEffect, useState } from "react";

import logo from "./logo.svg";

import "./App.css";

function Part(props: any) {
  console.log(props);
  return (
    <div className="Part">
      {props.name} (Amount: {props.amount}) <b>{props.file}</b>
    </div>
  );
}

export default Part;
