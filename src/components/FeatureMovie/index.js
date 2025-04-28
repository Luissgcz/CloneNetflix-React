import React from "react";
import "./style.css";

export default ({ item }) => {
  console.log(item);
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {console.log(item)}
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div featured--info>
            <div className="featured--points">{item.vote_average} Pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--season">
              {item.number_of_seasons} Temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured--description">{item.overview}</div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchButton">
              ▶ Assistir
            </a>
            <a href={`/list/add/${item.id}`} className="featured--mylistButton">
              ✚ Minha Lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Generos:</strong>
            {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};
