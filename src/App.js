import Navbar from "./atribute/navbar";
import Signup from "./atribute/signup";
import Login from "./atribute/login";
import { useState } from "react";

export default function App() {
  const [pages, setPages] = useState("Home");

  const renderPages = () => {
    if (pages === "login") {
      return <Login />;
    } else if (pages === "signup") {
      return <Signup />;
    }
  };
  return (
    <div>
      <Navbar setPages={setPages} />
      <div>{renderPages()}</div>
    </div>
  );
}
