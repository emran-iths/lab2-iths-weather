import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { Temperature } from "./pages/Temperature";
import { WindSpeed } from "./pages/WindSpeed";
import { Humidity } from "./pages/Humidity";
import { NotFound } from "./pages/NotFound";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/temperature" />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/wind_speed" element={<WindSpeed />} />
        <Route path="/humidity" element={<Humidity />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
