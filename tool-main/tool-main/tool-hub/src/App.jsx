import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LiveFigma from "./Pages/LiveFigma";
import AICalculator from "./Pages/AICalculator";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/live-figma" element={<LiveFigma />} />
        <Route path="/ai-calculator" element={<AICalculator />} />
      </Routes>
    </Router>
  );
}
