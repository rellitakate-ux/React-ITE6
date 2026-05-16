import { useState, useEffect } from "react";
import style from "./Activity4.module.css";
import ApiCard from "../../../components/containers/ApiContainer";
import Loader from "../../../components/loaders/Loader";

const Activity4 = () => {
  const [rickandmortyList, setRickandmortyList] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchRickandMorty = async () => {
    try {
      setLoader(true);
      const response = await fetch(
        "https://rickandmortyapi.com/api/character",
        {
          method: "GET",
        },
      );
      const result = await response.json();
      setTimeout(() => {
        setRickandmortyList(result.results.slice(0, 12));
        setLoader(false);
      }, 2500);
    } catch (error) {
      alert("An error occurred while fetching data. Please try again later.");
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchRickandMorty();
  }, []);

  return (
    <main className={style.container}>
      <h1 className={style.title}>Rick and Morty Characters</h1>
      <section className={style.gallery}>
        {loader ? (
          <div className={style.loader}>
            <Loader />
          </div>
        ) : (
          rickandmortyList.map((character) => (
            <ApiCard key={character.id} character={character} />
          ))
        )}
      </section>
    </main>
  );
};

export default Activity4;
