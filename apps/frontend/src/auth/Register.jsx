export default function Register({ setPage }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-white">
          Registrasi Akun
        </h1>

        <p className="text-center text-gray-300 mt-2">
          Buat akun baru untuk mengakses sistem
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Konfirmasi Password"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
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
