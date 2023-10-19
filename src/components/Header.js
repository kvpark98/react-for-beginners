import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from "prop-types";
import DarkLightMode from './DarkLightMode';
import mainLogo from '../image/mainLogo.svg';

function Header({checked, toggleTheme}) {
  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      sticky="top">
      <Container fluid>
        <Navbar.Brand href="/react-for-beginners">
          <img
            src={mainLogo}
            width="30"
            height="30"
            className="align-middle me-2"
            alt="Reactive Movie"/>
          <span className="align-middle">Reactive Movie</span>
        </Navbar.Brand>
        <DarkLightMode
          checked={checked}
          toggleTheme={toggleTheme}/>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  checked: PropTypes.string,
  toggleTheme: PropTypes.func.isRequired
};

export default Header;