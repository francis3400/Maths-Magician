import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  return (
    <div className="mainMenu">
      <h1 className="theHeading">Math Magicians</h1>
      <nav className="options">
        <Link to="/">Home</Link>
        |
        <Link to="Calculator">Calculator</Link>
        |
        <Link to="Quote">Quote</Link>
      </nav>
    </div>
  );
}

export default Nav;
