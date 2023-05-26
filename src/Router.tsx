import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Search from "./pages/Search";
import Randomizers from "./pages/Randomizer";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/randomizers" element={<Randomizers />} />
    </Routes>
  )
}