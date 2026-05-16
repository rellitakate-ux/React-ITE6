import { useState, useEffect } from "react";
import style from "./Activity3.module.css";
import AnimeContainer from "../../../components/containers/AnimeContainer";

const Activity3 = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    fetch("/anime.json")
      .then((response) => response.json())
      .then((result) => {
        setAnimeList(result.anime_list);
        console.log(result.anime_list);
      });
  }, []);

  return (
    <main>
      <div className={style.animeContainer}>
        <p className={style.label}>Anime List</p>
        <div className={style.animeGrid}>
          {animeList.map((anime) => (
            <AnimeContainer key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Activity3;
