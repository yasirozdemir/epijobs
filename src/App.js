import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import Favorites from "./components/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<h2>404 Page Not Found :(</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
