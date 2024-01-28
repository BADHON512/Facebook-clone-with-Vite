import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/Home/Homes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import { createContext, useState } from "react";
import ProtectedRoute from "./ProtectedRoute";

export const loginContext = createContext();

function App() {
  const [login, setLogin] = useState(false);
  console.log(login);
  return (
    <loginContext.Provider value={{ login, setLogin }}>
      <BrowserRouter>
        <ToastContainer position="bottom-center" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </loginContext.Provider>
  );
}

export default App;
