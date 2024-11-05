// Importing components to use
import { Route, Routes, useLocation } from "react-router-dom";
import HeaderPortfolio from "./components/HeaderPortfolio";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <HeaderPortfolio />}
      
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
