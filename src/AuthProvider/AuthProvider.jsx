import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
//create context
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //Google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const AuthInfo = {
        signInWithGoogle,
        createUser

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}