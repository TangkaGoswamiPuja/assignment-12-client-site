import { useContext } from "react";
import { AuthContext } from "../Authfile/Auth";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;