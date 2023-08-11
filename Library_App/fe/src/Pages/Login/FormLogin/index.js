import { Fragment,useRef,useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"
function FormLogin(props) {
  const [data,setData]=useState([])
    const inputUserName = useRef();
    const inputPassword = useRef();
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const inputUserNameValue = inputUserName.current.value;
        const inputPasswordValue = inputPassword.current.value;
        data.map(item=>{
          if(item.username===inputUserNameValue&&item.password===inputPasswordValue){
            navigate("/")
          }
        })
    }
    useEffect(() => {
      const data = axios.get("http://localhost:8081/login").then(item=>{
        setData(item.data)
      })
    }, []);
  return (
    <Fragment>
      <div className={"col-lg-12 col-md-12 " + props.props["form-login"]}>
        <form
          className={"row g-1 col-lg-4 col-md-8 col-sm-12 " + props.props.form}
          onSubmit={handleSubmit}
        >
          <h2 className="fw-bold ">LOGIN</h2>
          <h3 className="fw-bolder opacity-75 mb-5 ">Enter your manager</h3>
          <div className="col-10">
            <label htmlFor="validationDefault02" className="form-label fw-bold">
              Username
            </label>
            <input
            ref={inputUserName}
              type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="username"
              autoComplete="username"
              required
            />
          </div>
          <div className="col-10">
            <label htmlFor="validationDefault03" className="form-label fw-bold">
              Passowrd
            </label>
            <input
            ref={inputPassword}
              type="password"
              className="form-control"
              id="validationDefault03"
              placeholder="password"
              autoComplete="current-password"
              required
            />
          </div>
          <div className="mt-3">
            <button className="btn btn-primary ">Đăng nhập</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default FormLogin;
