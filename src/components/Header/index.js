import React from "react";
import "./style.css";

export default ({ classBlack }) => {
  return (
    <header className={classBlack ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"></img>
        </a>
      </div>
      <div className="header--user">
        <a href="/user">
          <img src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"></img>
        </a>
      </div>
    </header>
  );
};
