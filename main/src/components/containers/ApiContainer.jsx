import style from "./Container.module.css";

const ApiCard = ({ character }) => {
  return (
    <div className={style.card}>
      <img src={character.image} alt={character.name} />
      <div className={style["info-text"]}>
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
      </div>
    </div>
  );
};

export default ApiCard;
