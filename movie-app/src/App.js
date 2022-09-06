import "./App.css";
import Home from "./routes/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./routes/MovieDetail";
import Header from "./components/Header";
import { SearchMovie } from "./routes/SearchMovie";
import MyWatchList from "./routes/MyWatchList";

import { NotFound } from "./routes/NotFound";
import { WatchListProvider } from "./context/WatchListContext";

function App() {
  return (
    <WatchListProvider>
      <div className="App app-container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<SearchMovie />} />
            <Route path="mywatchlist" element={<MyWatchList />} />
            <Route path="search/movie/:id" element={<MovieDetail />} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="mywatchlist/movie/:id" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </WatchListProvider>
  );
}

export default App;
