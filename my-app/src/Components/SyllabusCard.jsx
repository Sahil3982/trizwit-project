// components/SyllabusCard.js

import React from "react";

const SyllabusCard = ({ syllabus }) => {
  return <>
  <div className="cart">
    <div > <span><img style={{width:25 , float:"left"}} src="logo.png"/> </span>  {syllabus.name} </div>
    <div>^</div>
  </div>
  <hr></hr>


  
  
  </>;
};

export default SyllabusCard;
