import BackgroundLogin from "./BackgroundLogin";
import FormLogin from "./FormLogin";
import classes from "./login.module.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Login() {
  const [show, setShow] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);
  const [login,setLogin]=useState(false)
  const handleClose = () =>{
    setCheckLogin(false)
    setShow(false);
    setLogin(false)
  }
  const loginSuccess=()=>{
    setCheckLogin(false)
    setShow(true);
    setTimeout(() => {
        setLogin(true);
      }, 1000);
    setTimeout(() => {
        window.location.href = '/';
    }, 2500);
  }
  const handleShow = () => {
    setShow(true);
    setTimeout(() => {
      setCheckLogin(true);
    }, 2000);
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }} className="fw-bold">
          {!checkLogin && (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "80px" }}
            >
              <div className={classes.colorful}></div>
            </div>
          )}
          {checkLogin && (
            <p className={classes.textCheck+ " fs-3 text-danger"}>
              TÀI KHOẢN HOẶC MẬT KHẨU KHÔNG HỢP LỆ !!
            </p>
          )}
          {login && (
            <p className={classes.textCheck+ " fs-3 text-success"}>
                ĐĂNG NHẬP THÀNH CÔNG !!
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
      <BackgroundLogin props={classes} />
      <FormLogin props={classes} onShow={handleShow}
      onLoginSuccess={loginSuccess} />
    </div>
  );
}

export default Login;
