import { useState } from "react";
import axios from "axios";

export default function Register({ setPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert(response.data.message);

      setPage("login");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Registrasi gagal"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-white">
          Registrasi Akun
        </h1>

        <p className="text-center text-gray-300 mt-2">
          Buat akun baru untuk mengakses sistem
        </p>

        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nama Lengkap"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            required
          />

          <input
            type="password"
            name="confPassword"
            value={formData.confPassword}
            onChange={handleChange}
            placeholder="Konfirmasi Password"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
          >
            Daftar
          </button>
        </form>

        <p className="text-center text-gray-300 mt-6">
          Sudah punya akun?

          <button
            type="button"
            onClick={() => setPage("login")}
            className="ml-2 text-blue-300 font-semibold"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}