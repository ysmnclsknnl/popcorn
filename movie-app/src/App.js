import "./App.css";
import Home from "./routes/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./routes/MovieDetail";
import Header from "./components/Header";
import { SearchMovie } from "./routes/SearchMovie";
import MyAccount from "./components/MyAccount";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<SearchMovie />} />
          <Route path="myaccount" element={<MyAccount />} />
          <Route path="search/movie/:id" element={<MovieDetail />} />
          <Route path="movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
