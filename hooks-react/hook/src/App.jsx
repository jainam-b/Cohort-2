import React ,{Suspense}  from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const  Dashboard = React.lazy(()=> import("./components/Dashboard")); 
const  Landing = React.lazy(()=> import("./components/Landing")); 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar></Appbar>
        <Routes>
          <Route path="/dashboard" element={ <Suspense fallback={"loading ..."}> <Dashboard /></Suspense>}></Route>
          <Route path="/" element={ <Suspense fallback={"loading ..."}> <Landing /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
    </div>
  );
}
export default App;
