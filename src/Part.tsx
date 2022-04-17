import React, { useEffect, useState } from "react";

import logo from "./logo.svg";

import "./App.css";

function Part(props: any) {
  return (
    <div className="Part">
      {props.name} (Amount: {props.amount})
    </div>
  );
}

export default Part;
