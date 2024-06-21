import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import useAxiosOpen from "../Hooks/useAxiosOpen";


export const AuthContext = createContext();

const googleAProvider = new GoogleAuthProvider();
const auth = getAuth(app);


const Auth = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)

    const axiosOpen = useAxiosOpen();
    const createrUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoding(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = ()=>{
        setLoding(true);
      return  signInWithPopup(auth , googleAProvider)
    }

    const logOut = () => {
        setLoding(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('current user', currentUser)
            if(currentUser){
                const userInfo = {email : currentUser.email};
axiosOpen.post('/jwt',userInfo)
.then(res=>{
    if(res.data.token){
        localStorage.setItem('access-token',res.data.token);
    }
})

            }
            else{
localStorage.removeItem('acsess-token')
            }
            setLoding(false);
        });
        return () => { unSubscribe() }
    }, [axiosOpen])

    const authInfo = {
        user, loading, createrUser,signIn,signInGoogle,logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;