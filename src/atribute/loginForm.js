import { useState } from "react";

export default function Signup() {
  const [user_nama, setUsername] = useState("");
  const [user_password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user_nama || !user_password) {
      alert("Please fill out all fields.");
      return;
    } else {
      const url = "http://localhost:80/api/login.php";
      let fData = new FormData();
      fData.append("username", user_nama);
      fData.append("password", user_password);
      try{
        const response = await fetch(url, {
          method: "POST",
          body: fData,
        });
        const data = await response.json();
        console.log(data, "ini data dari login");

        if( data.success === 1){
          
        }
      } catch(error){
        console.log("error");
      }
    }
  };

  return (
    <div className=" min-w-screen min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-light-teal">
          <p className="text-center text-white text-lg font-bold">Login</p>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username <sup className="text-red-500">*</sup>
            </label>
            <input
              className="focus:border-sky-300  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={user_nama}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password <sup className="text-red-500">*</sup>
            </label>
            <input
              className="focus:border-sky-300  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={user_password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <a
              href="/forgot-password"
              className="text-sky-600/75 text-xs font-semibold font-serif hover:text-sky-600"
            >
              Forgot Password
            </a>
            <a
              href="/sign-up"
              className="text-sky-600/75 text-xs font-semibold font-serif hover:text-sky-600"
            >
              Sign Up
            </a>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-lm-teal text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 Kelompok Bahagia
        </p>
      </div>
    </div>
  );
}
