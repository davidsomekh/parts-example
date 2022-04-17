import React, { useEffect, useState } from "react";

import logo from "./logo.svg";

import "./App.css";

function Part(props: any) {
  console.log(props);
  return (
    <div className="Part">
      {props.name} (Amount: {props.amount}) <b>{props.file}</b> <i className="fa fa-edit icons"></i>

    </div>
  );
}

export default Part;
