import { useState } from "react";
import style from "./count.module.css";
import Button from "../../components/buttons/Button";

const Count = () => {
  const [count, setCount] = useState(0);

  const countIncrese = () => {
    setCount(count + 1);
  };

  const countDecrease = () => {
    setCount(count - 1);
  };

  return (
    <main className={style.container}>
      <section className={style.title}>
        <h1>The Counter</h1>
        <h4>count: {count}</h4>
      </section>
      <div className={style.buttons}>
        <Button btnName={"increase"} size="medium" onClick={countIncrese} />
        <Button btnName={"decrease"} size="medium" onClick={countDecrease} />
      </div>
    </main>
  );
};

export default Count;
