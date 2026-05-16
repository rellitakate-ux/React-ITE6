import {useState, useEffect} from "react";
import style from "./Activity2.module.css";
import Button from "../../../components/buttons/Button";

const Activity2 = () => {
  const [count, setCount] = useState(0);
  const [game, setGame] = useState({
    target: null,
    timeLeft: null,
    status: "waiting",
  });

  const makeTarget = () => {
    const isPositive = Math.random() > 0.5;
    const value = Math.floor(Math.random() * 41) + 10;
    return isPositive ? value : -value;
  };

  const startGame = () => {
    setCount(0);
    setGame({
      target: makeTarget(), 
      timeLeft: Math.floor(Math.random() * 11) + 10, 
      status: "playing"
    });
  };

  const resetGame = () => {
    setCount(0);
    setGame({
      target: null, 
      timeLeft: null, 
      status: "waiting"});
  };

  useEffect (() => {
    if (game.status !== "playing") return;

    const timer = setInterval(() => {
      setGame((prev) => {
        if (prev.timeLeft <= 1) {
          clearInterval(timer);
          return {...prev, timeLeft: 0};
        }
        return {...prev, timeLeft: prev.timeLeft - 1};
      });
    }, 1000);

    return () => clearInterval (timer);
  }, [game.status]);

  useEffect(() => {
    if (game.status !== "playing") return;

    if(count === game.target) {
      setGame((prev) => ({...prev, status: "win"}));
    } else if (game.timeLeft === 0) {
      setGame((prev) => ({...prev, status: "lose"}));
    }
  }, [count, game.timeLeft, game.target, game.status]);

  const countIncrease = () => {
    if (game.status === "playing") setCount((prev) => prev + 1);
  };

  const countDecrease = () => {
    if (game.status === "playing") setCount((prev) => prev - 1);
  };

  return (
    <main className={style.container}>
      <article className={style.countContainer}>
        <section className={style.title}>
          <h1>Hawak Mo Ang Click</h1>

          {game.status === "waiting" && (
            <p>Press <strong>Start</strong> to play the game</p>
          )}

        {game.status === "playing" && (
          <>
            <h3>Target: <strong>{game.target > 0 ? `+${game.target}` : game.target}</strong></h3>
            <h4>Time Left: {game.timeLeft}s</h4>
            <h4>Count: {count}</h4>
            
          </>
        )}
        
        {game.status === "win" && (
          <>
            <h2>Congrats, Sumakses ka eh!</h2>
            <p>You hit <strong>{game.target}</strong> clicks with {game.timeLeft}s left</p>
          </>
        )}
        
        {game.status === "lose" && (
          <>
            <h2>Aray moooo!</h2>
            <p>Target was <strong>{game.target}</strong>, you only reached <strong>{count}</strong>.</p>
          </>
        )}
        </section>

          {game.status === "playing" && (
            <div className={style.buttons}>
              <Button btnName={"increase"} size="medium" onClick={countIncrease} />
              <Button btnName={"decrease"} size="medium" onClick={countDecrease} />
            </div>
         )}

         <section className={style.buttons}>
          {game.status === "waiting" || game.status === "playing" ? (
            <Button btnName={"Start"} size="medium" onClick={startGame} />
          ) : (
            <Button btnName={"Play Again"} size="medium" onClick={startGame} />
          )}
          {game.status !== "waiting" && (
            <Button btnName={"Reset"} size="medium" onClick={resetGame} />
          )}
        </section>
      </article>
    </main>
  );
};

export default Activity2;