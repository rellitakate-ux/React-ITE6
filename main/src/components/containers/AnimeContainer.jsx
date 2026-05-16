import style from "./Container.module.css";

const AnimeContainer = ({ anime }) => {
  return (
    <div className={style.container}>
      <div className={style.poster}>
        <img src={anime.image} alt={anime.title} />
        <span className={style.genre}>{anime.genre}</span>
      </div>

      <div className={style.cardInfo}>
        <div className={style.title}>{anime.title}</div>
        <div className={style.author}>by {anime.author}</div>
        <p className={style.desc}>{anime.desc}</p>
      </div>
    </div>
  );
};

export default AnimeContainer;
