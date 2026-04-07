import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/activity1/Landing_page";
import Count from "./pages/count/count";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/count" element={<Count />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
