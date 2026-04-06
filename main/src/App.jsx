import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./groupLandingPage/components/Navbar";
import MainSection from "./groupLandingPage/components/MainSection";
import About from "./groupLandingPage/components/About";
import Members from "./groupLandingPage/components/MemberSec";

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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<LandingPage />} />
        <Route path="/Members" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
