import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { Temperature } from "./pages/Temperature";
import { WindSpeed } from "./pages/WindSpeed";
import { Humidity } from "./pages/Humidity";
import { NotFound } from "./pages/NotFound";
import LongLatContext from "./LongLatContext";
import Navbar from "./Navbar";
import Map from "./Map";
import styled from "styled-components";

function App() {
  const longLatState = useState(null);
  const [longLat, setLongLat] = longLatState;

  const Title = styled.h1`
    font-size: 24;
    text-align: center;
    color: #bb0099;
  `;

  return (
    <>
      <Title>Weather app</Title>
      <LongLatContext.Provider value={longLatState}>
        <Map />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/temperature" />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/wind_speed" element={<WindSpeed />} />
          <Route path="/humidity" element={<Humidity />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </LongLatContext.Provider>
    </>
  );
}

export default App;
