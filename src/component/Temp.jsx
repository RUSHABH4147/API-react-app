import "./App.css";
import React, { useState } from "react";
import temp from "../temp.json"


function Temp() {
 
  return (
    <div className="App">
     <h1> temp!</h1>
      <div >
        {
          temp.map(({name,temp_c,text,localtime}) => {
            return (
              <div >
                <p>
                  <strong>location {name}</strong>
                </p>
                <p>tempreture{" "+temp_c}.cel</p>
                <p>{text}</p>
                <p>{localtime}</p>
                <hr/>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Temp;