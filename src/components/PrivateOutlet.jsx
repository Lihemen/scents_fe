import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "react-use-auth";

export default function PrivateOutlet() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
