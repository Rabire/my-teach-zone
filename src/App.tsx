import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedLayout from "pages/layouts/ProtectedLayout";
import GuestLayout from "pages/layouts/GuestLayout";
import Login from "pages/Login";
import Register from "pages/Register";
import Dashboard from "pages/Dashboard";
import Schools from "pages/Schools";
import Formations from "pages/Formations";

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
          <Route path="formations" element={<Formations />} />
          <Route path="schools" element={<Schools />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
