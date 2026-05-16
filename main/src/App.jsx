import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activity1 from "./pages/Activities/activity1/Activity1";
import Activity2 from "./pages/Activities/activity2/Activity2";
import Activity3 from "./pages/Activities/activity3/Activity3";
import Activity4 from "./pages/Activities/activity4/Activity4";
import { projects } from "./data/activitiesData";
import MCO from "./pages/MCO/ITE";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MCO />} />

        <Route path="/Activity1" element={<Activity1 />} />
        <Route path="/Activity2" element={<Activity2 />} />
        <Route path="/Activity3" element={<Activity3 />} />
        <Route path="/Activity4" element={<Activity4 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
