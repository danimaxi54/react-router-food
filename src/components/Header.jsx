import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='green darken-1'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          React Food
        </Link>
        <ul className='right hide-on-med-and-down' id='nav-mobile'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
