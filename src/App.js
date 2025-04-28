import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeatureMovie";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default () => {
  document.addEventListener("mousemove", (event) => {
    console.log(`Posição Y: ${event.clientY}`);
  });
  const [movieList, setMovieList] = useState([]);
  const [featureMovie, setFeatureMovie] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o featured
      let originals = list.filter((value) => value.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * originals[0].itens.results.length
      );
      let chosen = originals[0].itens.results[randomChosen];
      let chosenInfo = await Tmdb.getInfoFeature(chosen.id, "tv");
      setFeatureMovie(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollMonitoring = () => {
      if (window.scrollY > 120) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollMonitoring);

    return () => {
      window.removeEventListener("scroll", scrollMonitoring);
    };
  }, []);

  return (
    <div className="page">
      <Header classBlack={blackHeader} />
      {featureMovie && <FeatureMovie item={featureMovie} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} itens={item.itens} />
        ))}
      </section>
      <footer>Developer Luissgcz oi</footer>
      {movieList.length <= 0 && (
        <div className="loading-overlay">
          <FontAwesomeIcon className="loading" icon={faSpinner} />
        </div>
      )}
    </div>
  );
};
