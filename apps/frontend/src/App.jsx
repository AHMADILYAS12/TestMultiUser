import { useState } from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./admin/Dashboard";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [page, setPage] = useState("login");

  // user atau admin
  const [role, setRole] = useState("");

  if (isLogin) {
    if (role === "admin") {
      return <Dashboard />;
    }

    return (
      <>
        <Navbar />
        <Home />
      </>
    );
  }

  return (
    <>
      {page === "login" ? (
        <Login
          setIsLogin={setIsLogin}
          setPage={setPage}
          setRole={setRole}
        />
      ) : (
        <Register setPage={setPage} />
      )}
    </>
  );
};

export default App;