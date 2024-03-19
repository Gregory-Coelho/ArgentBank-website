import { Home } from "../src/pages/Home.tsx";
import { User } from "../src/pages/User.tsx";
import { SignIn } from "../src/pages/SignIn.tsx";
import { Error } from "../src/pages/Error.tsx";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

