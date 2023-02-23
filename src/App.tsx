import { BrowserRouter as Router, Navigate, Route, Routes, } from "react-router-dom";
import { Home } from "./pages/home";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home />}/>

        <Route path="*"  element={<Navigate to="/login" />}/>
      </Routes>
    </Router>
  );
}

export default App;
