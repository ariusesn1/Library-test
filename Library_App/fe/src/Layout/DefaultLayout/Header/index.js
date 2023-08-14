import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom"
import classes from "./Header.module.css"
import {useContext, useEffect,useState} from 'react'
import { TokenContext } from '../../../store/Token-contex';
import axios from 'axios'
function Header() {
  const check = useContext(TokenContext)
  const [checkToken,setCheckToken]=useState(check.checkToken)
  const navigate = useNavigate()
  const tokenLocal = localStorage.getItem('token')
  const checkLogin = async()=>{
    const dataToken = await axios.get('http://localhost:8081/token')
    if(dataToken.data.length===0){
      check.removeCheck()
      navigate("/login")
    }else{ 
      dataToken.data.map(item=>{
      if(item.token==tokenLocal&&Number(item.timeLife)>=Number(Date.now())){
       setCheckToken(!checkToken)
       navigate("/")
      }
    })
  }
      
  }
  const logOut = async()=>{
    localStorage.removeItem('token')
    setCheckToken(false)
    await axios.delete('http://localhost:8081/token')
    window.location.href="/login"
  }
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" style={{height:'50px'}}>
        <Container>
        {checkToken&&<Nav className="me-auto">
              <Link to="/" className={classes.link}>TRANG CHỦ</Link>
              <Link to="/books" className={classes.link}>QUẢN LÝ SÁCH</Link>
              <Link to="/category" className={classes.link}>QUẢN LÝ LOẠI SÁCH</Link>
              <Link to="/authors" className={classes.link}>QUẢN LÝ TÁC GIẢ</Link>
            </Nav>}
            <Nav>
              {!checkToken&&<Link to="/login" className={classes.link} >ĐĂNG KÝ | ĐĂNG NHẬP</Link>}
              {checkToken&&<button className='btn btn-primary' onClick={logOut}>LOG OUT</button>}
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;