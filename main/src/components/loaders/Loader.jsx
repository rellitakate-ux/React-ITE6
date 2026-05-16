import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.circle}>
        <div className={style.dot}></div>
        <div className={style.outline}></div>
      </div>
      <div className={style.circle}>
        <div className={style.dot}></div>
        <div className={style.outline}></div>
      </div>
      <div className={style.circle}>
        <div className={style.dot}></div>
        <div className={style.outline}></div>
      </div>
      <div className={style.circle}>
        <div className={style.dot}></div>
        <div className={style.outline}></div>
      </div>
    </div>
  );
};

export default Loader;
