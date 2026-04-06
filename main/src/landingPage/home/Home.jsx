import "./Home.css";
import Button from "../../components/buttons/Button";

const Home = () => {
  return (
    <body>
      <header className="header">
        <h1>BSIT-2A: Group 3 - Members</h1>
        <p>Our group is consist of 4 dedicated members.</p>
      </header>
      <main className="home">
        <section className="about">
          <ul>
            <li>
              <strong>Lee Conarco</strong>
            </li>
            <li>
              <strong>Dailyn Collamar</strong>
            </li>
            <li>
              <strong>Jerson Manlabe</strong>
            </li>
            <li>
              <strong>Katelyn Relllita</strong>
            </li>
          </ul>

          <Button btnName={"Open"} onClick={() => alert("Hello World")} />
        </section>

        <footer>
          <p>&copy; 2023 BSIT - 2A: Group 3</p>
        </footer>
      </main>
      <footer>
        <p>&copy; 2023 BSIT - 2A: Group 3</p>
      </footer>
    </body>
  );
};

export default Home;
