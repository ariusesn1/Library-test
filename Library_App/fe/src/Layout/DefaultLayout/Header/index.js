import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import classes from "./Header.module.css"
function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" style={{height:'50px'}}>
        <Container>
        <Link to="/" className={classes.link}>Logo</Link>
          <Nav className="me-auto">
          <Link to="/" className={classes.link}>About</Link>
          <Link to="/" className={classes.link}>Contact</Link>
          
          </Nav>
          <Nav>
          <Link to="/" className={classes.link} >Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;