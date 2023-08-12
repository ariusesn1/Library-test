import BackgroundLogin from "./BackgroundLogin";
import FormLogin from "./FormLogin";
import classes from "./login.module.css"
function Login() {
    return (  <div>
        <BackgroundLogin props={classes}/>
        <FormLogin props={classes}/>
    </div>);
}

export default Login;