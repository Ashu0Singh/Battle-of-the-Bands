import Homepage from "./components/Home/Homepage";
import Poll from "./components/Polling/Poll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GenerateImg from "./components/Image Generation/ImageGen";
import Leaderboard from "./components/Leaderboard/Leaderboard";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route exact path="/Prompt-Battle/" element={<Homepage />} />
        <Route
          exact
          path="/Prompt-Battle/GenerateImage/:teamId"
          element={<GenerateImg />}
        />
        <Route
          exact
          path="/Prompt-Battle/GenerateImage"
          element={<GenerateImg />}
        />
        <Route
          exact
          path="/Prompt-Battle/Leaderboard"
          element={<Leaderboard />}
        />
        <Route exact path="/Prompt-Battle/Polling" element={<Poll />} />
      </Routes>
    </Router>
  );
}

export default App;
