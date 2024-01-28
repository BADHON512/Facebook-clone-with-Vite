import { useContext } from "react";
import Home from "./components/Home/Homes";
import Login from "./components/auth/Login";
import { loginContext } from "./App";

const ProtectedRoute = () => {
  const { login } = useContext(loginContext);

  if (login) {
    return <Home />;
  }
  return <Login />;
};

export default ProtectedRoute;
