import { useState, useEffect } from "react";
import { isAuthenticated as checkAuth } from "../utils/auth";

const useAuth = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(checkAuth());
  }, []);

  return auth;
};

export default useAuth;
