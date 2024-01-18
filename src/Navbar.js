import { Link, Routes, Route, Navigate } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/temperature">Temperature</Link>
      </li>
      <li>
        <Link to="/wind_speed">Wind speed</Link>
      </li>
      <li>
        <Link to="/humidity">Humidity</Link>
      </li>
    </ul>
  );
};

export default Navbar;
