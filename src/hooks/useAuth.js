// import { useState, useEffect, createContext, useContext } from "react";
import React, { useState, useEffect, useContext, createContext } from "react";
import { Amplify, Auth, Hub } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();

    const listener = (data) => {
      switch (data.payload.event) {
        case "signIn":
        case "tokenRefresh":
          checkUser();
          break;
        case "signOut":
          setUser(null);
          break;
        default:
            console.warn("Unhandled case:", data.payload.event);
      }
    };

    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  async function checkUser() {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      setUser(authUser);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function signIn(email, password, rememberMe, navigate) {
    try {
      const user = await Auth.signIn(email, password);
      setUser(user);
      if (rememberMe) localStorage.setItem("rememberMe", email);
      else localStorage.removeItem("rememberMe");
      navigate("/profile");
    } catch (error) {
      if (error.code === "UserNotConfirmedException") {
        await Auth.resendSignUp(email);
        navigate(`/confirm-signup?email=${email}`);
      } else {
        alert(error.message);
      }
    }
  }

  async function signUp(email, password, name, navigate) {
    try {
      await Auth.signUp({ username: email, password, attributes: { name, email } });
      navigate(`/confirm-signup?email=${email}`);
    } catch (error) {
      alert(error.message);
    }
  }

  async function confirmSignUp(email, code, navigate) {
    try {
      await Auth.confirmSignUp(email, code);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  }

  async function signOut(navigate) {
    try {
      await Auth.signOut();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, confirmSignUp, signOut }}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
