import { User, Lock } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function Login({ setPage, setIsLogin, setRole }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      const { token, user, message } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user.role);

      setRole(user.role);
      setIsLogin(true);

      alert(message);
    } catch (error) {
      console.error("Login Error:", error);

      alert(
        error.response?.data?.message ||
        "Login gagal"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
          <div className="flex flex-col items-center">
            <h1 className="mt-4 text-3xl font-bold text-white">
              Sistem Multi User
            </h1>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="text-gray-200 text-sm">
                Email
              </label>

              <div className="mt-2 flex items-center bg-white/10 border border-white/20 rounded-lg px-3">
                <User className="w-5 h-5 text-gray-300" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan email"
                  className="w-full bg-transparent p-3 text-white outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-gray-200 text-sm">
                Password
              </label>

              <div className="mt-2 flex items-center bg-white/10 border border-white/20 rounded-lg px-3">
                <Lock className="w-5 h-5 text-gray-300" />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Masukkan password"
                  className="w-full bg-transparent p-3 text-white outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded-lg"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-300 mt-6">
            Belum punya akun?

            <button
              type="button"
              onClick={() => setPage("register")}
              className="ml-2 text-blue-300 font-semibold hover:text-blue-200"
            >
              Daftar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}