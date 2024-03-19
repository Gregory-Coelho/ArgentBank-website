import { Home } from "../src/pages/Home.tsx";
// import { User } from "../src/pages/User.tsx";
import { Login } from "../src/pages/login/Login.tsx";
import { Profile } from "../src/pages/profile/Profile.tsx";
import { Error } from "../src/pages/Error.tsx";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/user/:id" element={<User />} /> */}
        <Route path='profile' element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

