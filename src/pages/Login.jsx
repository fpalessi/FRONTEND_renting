import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setCurrentUser, currentUser } = useAuth();

  if (currentUser) {
    return <Navigate to="/acc" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", { email, password });
      // same as const { data } = await axios.post(...)
      console.log(response.data);
      setCurrentUser(response.data);
      console.log("data seteada en estado");
      navigate("/");
    } catch {
      console.log("Login failed");
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-2xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-4 text-slate-700 underline">
            <Link to={"/register"}>Create an account here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
