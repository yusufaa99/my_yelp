
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";

export default function RequireAuth({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    async function checkAuth() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        setUser(authUser);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  if (loading) return <p>Loading...</p>;

  return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
}
