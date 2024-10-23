import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [user_nama, setNama] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [user_repassword, setRepassword] = useState("");
  const [message, setMessage] = useState(""); // State for feedback messages
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user_nama || !user_email || !user_password || !user_repassword) {
      alert("Please fill out all fields.");
      return;
    }

    if (user_password !== user_repassword) {
      alert("Passwords do not match.");
      return;
    }

    const url = "http://localhost:80/api/signup.php";
    let fData = new FormData();
    fData.append("username", user_nama);
    fData.append("email", user_email);
    fData.append("password", user_password); // Use user_password instead of user_repassword

    try {
      const response = await fetch(url, {
        method: "POST",
        body: fData,
      });

      const data = await response.json();

      if (data.status === 1) {
        setMessage("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {

        setMessage(data.message, "ini dari else"); 
      }
    } catch (error) {
      console.error("ini error", error)
      setMessage("Username sudah ada, mohon gunakan yang lain");
    }
  };

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-light-teal"
          onSubmit={handleSubmit}
        >
          <p className="text-center text-white text-lg font-bold">
            Create Account
          </p>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username <sup className="text-red-500">*</sup>
            </label>
            <input
              className="focus:border-sky-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              name="user_nama"
              value={user_nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email <sup className="text-red-500">*</sup>
            </label>
            <input
              className="focus:border-sky-300 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:invalid:text-pink-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
              name="user_email"
              value={user_email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password <sup className="text-red-500">*</sup>
            </label>
            <input
              className="focus:border-sky-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={user_password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Re-Password <sup className="text-red-500">*</sup>
            </label>
            <input
              className="focus:border-sky-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="repassword"
              type="password"
              placeholder="******************"
              value={user_repassword}
              onChange={(e) => setRepassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-lm-teal text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" // Change to submit type
            >
              Create
            </button>
          </div>
          {message && (
            <p className="text-red-500 text-center mt-4">{message}</p>
          )}{" "}
          {/* Display feedback message */}
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 Kelompok Bahagia
        </p>
      </div>
    </div>
  );
}
