import BackgroundLogin from "./BackgroundLogin";
import FormLogin from "./FormLogin";
import classes from"./login.module.css"
function Login() {
    return ( 
    <div>
        
        <FormLogin props={classes}/>
        <BackgroundLogin props={classes}/>
    </div> );
}

export default Login;