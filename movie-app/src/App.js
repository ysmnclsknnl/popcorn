import "./App.css";
import Home from "./routes/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./routes/MovieDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popcorn</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
