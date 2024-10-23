import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Addevent from "./pages/addevent";
import ForgotPassword from "./pages/forgotpassword";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/pts-react-app" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-event" element={<Addevent />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
