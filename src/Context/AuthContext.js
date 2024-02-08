import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {getDataService} from "../services/index.js"

export const AuthContext = createContext();

export const AuthProvideComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
        try{
          const data = await getDataService ({token});
          setUser(data);
        } catch(error){
          logout();
        }

    }

    if(token){ getUserData()}
  }, [token])

  const login = (token) => {
    setToken(token);
  }

  const logout = () => {
    setToken('');
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

AuthProvideComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
