import { createContext } from "react";


const AuthContext = createContext(null);

const authInfo = {

};

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;