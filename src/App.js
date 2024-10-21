import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Navbar from "./atribute/navbar";
import Signup from "./atribute/signup";
import Login from "./atribute/login";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar path="/" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
