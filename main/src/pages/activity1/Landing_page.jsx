import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import About from "./components/About";
import Members from "./components/MemberSec";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <About />
      <Members />
    </div>
  );
};

export default LandingPage;
