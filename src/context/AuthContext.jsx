import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Fetching info from the user if the user is empty
  useEffect(() => {
    if (!currentUser) {
      axios.get("/profile").then(({ data }) => {
        setCurrentUser(data);
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
