import { useState } from "react";

export default function Signup() {
  const [cust_username, setUsername] = useState("");
  const [cust_email, setEmail] = useState("");
  const [cust_password, setPassword] = useState("");
  const [cust_repassword, setRepassword] = useState("");

  console.log(cust_email, "ini email");
  console.log(cust_username, "ini username");
  console.log(cust_password, "ini password");
  console.log(cust_repassword, "ini repassword");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cust_username || !cust_email || !cust_password || !cust_repassword) {
      alert("Please fill out all fields.");
      return;
    }
    if (cust_password === cust_repassword) {
      // const url = "%%";
      // let fData = new FormData();
      // fData.append("username", cust_username);
      // fData.append("email", cust_email);
      // fData.append("password", cust_password);

      // fetch(url, {
      //   method: "POST",
      //   body: fData
      // })
      //   .then((response) => response.json())
      //   .then((data) => alert(data))
      //   .catch((error) => alert(error));

      alert("submit");
    } else {
      console.log("Passwords do not match");
      alert("Passwords do not match");
      alert("submit");
    }
  };

  return (
    <div className=" min-w-screen min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-light-teal">
          <p className="text-center text-white text-lg font-bold">
            Create Account
          </p>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username <sup className="text-red-500">*</sup>
            </label>
            <input
              className="focus:border-sky-300  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={cust_username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email <sup className="text-red-500">*</sup>
            </label>
            <input
              className="focus:border-sky-300  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:invalid:text-pink-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
              value={cust_email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password <sup className="text-red-500">*</sup>
            </label>
            <input
              className="focus:border-sky-300  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={cust_password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="repassword"
            >
              Re-Password <sup className="text-red-500">*</sup>
            </label>
            <input
              className="focus:border-sky-300  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={cust_repassword}
              onChange={(e) => setRepassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-lm-teal text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Create
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
