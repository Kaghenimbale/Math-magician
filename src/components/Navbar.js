import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const links = [
    {
      path: '/',
      element: 'Home',
    },
    {
      path: 'calculator',
      element: 'Calculator',
    },
    {
      path: 'quotes',
      element: 'Quotes',
    },
  ];
  return (
    <nav className={styles.navbar}>
      <h2>Math Magicians</h2>
      <ul className={styles.navlist}>
        {links.map((link) => (
          <li key={link.element}>
            <NavLink className={styles.navlink} to={link.path}>
              {link.element}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
