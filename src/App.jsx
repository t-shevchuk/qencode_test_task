import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./components/login/Login";
import LoginContainer from "./containers/LoginContainer";
import ForgotPassword from "./components/login/ForgotPassword";
import ResetPassword from "./components/login/ResetPassword";

import { setupDAL } from "./setupDal";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  setupDAL();

  return (
    <BrowserRouter>
      <ToastContainer />

      <Routes>
        <Route
          path="/login"
          element={
            <LoginContainer title="Log in to your account">
              <Login />
            </LoginContainer>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <LoginContainer title="Forgot Password?">
              <ForgotPassword />
            </LoginContainer>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <LoginContainer title="Create new Password?">
              <ResetPassword />
            </LoginContainer>
          }
        />

        <Route path="/discover" element={<div>Logged in</div>} />
        <Route path="/signup" element={<div>signup</div>} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
