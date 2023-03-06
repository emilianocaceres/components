import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import CardObjetives from "../components/CardObjetives/CardsObjetives";

import logo from "../logo.svg";
import Home from "../pages/Home/Home";




export const AppRoutes = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" className="nav-active">
                Home
              </NavLink>
            </li>
          
          </ul>
        </nav>

        <Routes>
         

          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
    );
};