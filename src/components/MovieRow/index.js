import React, { useState } from "react";
import "./style.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default ({ title, itens }) => {
  const [marginLeft, setMargin] = useState(-400);

  const moveLeft = () => {
    let scroolX = marginLeft + Math.round(window.innerWidth / 2);
    if (scroolX > 0) {
      scroolX = 0;
    }
    setMargin(scroolX);
  };

  const moveRight = () => {
    let scroolX = marginLeft - Math.round(window.innerWidth / 2);
    let listW = itens.results.length * 150;
    if (window.innerWidth - listW > scroolX) {
      scroolX = window.innerWidth - listW - 60;
    }
    setMargin(scroolX);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={moveLeft}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={moveRight}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: marginLeft,
            width: itens.results.length * 150,
          }}
        >
          {itens.results.map((item, key) => (
            <div className="movieRow--item" key={key}>
              <img
                alt={item.original_name}
                key={key}
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
