import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import { AuthProvider } from "./context/authContext";
import Profile from "./pages/Profile";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/acc/:subpage?" element={<Profile />} />
          <Route path="/acc/:subpage/:action" element={<Profile />} />

          {/* <Route path="/acc/bookings" element={<Profile />} />
          <Route path="/acc/cars" element={<Profile />} /> */}
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
