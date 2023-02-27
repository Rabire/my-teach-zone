import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ProtectedLayout from "./pages/ProtectedLayout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="students" element={<Students />} />
      </Route>
    </Routes>
  );
}

export default App;
