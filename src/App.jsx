import { ArgentBankWebsite } from "../src/component/ArgentBankWebsite";
import { User } from "../src/component/User";
import { SignIn } from "../src/component/SignIn";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArgentBankWebsite />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

