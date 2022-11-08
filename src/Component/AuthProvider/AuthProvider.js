import React, { createContext, useState } from 'react';

import { getAuth } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';

const auth = getAuth(app)

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);


    const authInfo = {}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;