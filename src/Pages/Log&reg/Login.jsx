import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
             <Helmet>
                <title>
                    | LOGIN
                </title>
            </Helmet>

            loginnn

          <p> <Link to={"/register"}>reg</Link></p> 
        </div>
    );
};

export default Login;