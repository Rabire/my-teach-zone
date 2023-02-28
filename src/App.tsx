import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "pages/Login";
import Register from "pages/Register";
import ProtectedLayout from "pages/ProtectedLayout";
import Dashboard from "pages/Dashboard";
import Students from "pages/Students";

function App() {
  return (
    <>
      <ToastContainer position="bottom-left" theme="dark" />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Register />} />

        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
