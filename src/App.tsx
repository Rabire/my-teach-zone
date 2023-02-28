import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "pages/Login";
import Register from "pages/Register";
import ProtectedLayout from "pages/ProtectedLayout";
import Dashboard from "pages/Dashboard";
import Students from "pages/Students";
import GuestLayout from "pages/GuestLayout";

function App() {
  return (
    <>
      <ToastContainer position="bottom-left" theme="dark" />

      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
