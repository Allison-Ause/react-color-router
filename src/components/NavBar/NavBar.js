import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/rgb/60/21/24" className="navlink">
        Chocolate
      </NavLink>
      <NavLink to="/rgb/105/20/14" className="navlink">
        Chestnut
      </NavLink>
      <NavLink to="/rgb/164/66/0" className="navlink">
        Gingersnap
      </NavLink>
    </div>
  );
}
