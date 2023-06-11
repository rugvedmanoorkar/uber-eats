import React from "react";
import "./CenterBox.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
function CenterBox(props) {
  return (
    <>
      <div className="centerbox">
        <Link to={props.href}>
          <img src={props.imgurl} alt={props.title} />
          </Link>
          <h2> {props.title} </h2>
          <Link className="custom-link" to={props.href}><h3> {props.description} </h3>  </Link>
          
        
      </div>
    </>
  );
}

export default CenterBox;
