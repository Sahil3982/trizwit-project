// components/Header.js

import React from "react";


const Header = () => {
  return (
    <header>
      <nav>
      <div className="navbar">
          <a href="#"><select >
            <option value="Courses">Courses</option>
            <option value="Courses">Math</option>
            <option value="Courses">Science</option>
            <option value="Courses">Social Science</option>

          </select></a>
          <a href="#">Search <img src="search.png" style={{width:25 , float:"left"}}/ ></a>
      </div>
      <div className="navbar">
          <a href="#">Logo_Company</a>

      </div>
      <div className="navbar">
            <a href="#">Donate</a>
            <a href="#">Log in</a>
            <a href="#">Sign up</a>
      </div>
        
         
           
          
        
      </nav>
    </header>
  );
};

export default Header;
