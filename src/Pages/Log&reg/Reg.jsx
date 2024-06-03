import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Reg = () => {
    return (
        <div>
            <Helmet>
                <title>
                    | REGISTER
                </title>
            </Helmet>
            reiiss
            <p> <Link to={"/login"}>login</Link></p> 

        </div>
    );
};

export default Reg;