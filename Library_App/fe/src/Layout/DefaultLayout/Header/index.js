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
            <Nav className="me-auto">
              <Link to="/Home" className={classes.link}>TRANG CHỦ</Link>
              <Link to="/books" className={classes.link}>QUẢN LÝ SÁCH</Link>
              <Link to="/category" className={classes.link}>QUẢN LÝ LOẠI SÁCH</Link>
              <Link to="/authors" className={classes.link}>QUẢN LÝ TÁC GIẢ</Link>
            </Nav>
            <Nav>
              <Link to="/" className={classes.link} >ĐĂNG KÝ | ĐĂNG NHẬP</Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;