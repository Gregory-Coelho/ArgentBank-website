import { HomePage } from '../src/pages/home/HomePage.tsx'
import { Login } from "../src/pages/login/Login.tsx";
import { Profile } from "../src/pages/profile/Profile.tsx";
import { Error } from "../src/pages/Error.tsx";
import { Routes, Route } from "react-router-dom";
import './index.css'

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='profile' element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

