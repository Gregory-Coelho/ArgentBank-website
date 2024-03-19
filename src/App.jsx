import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router.tsx";
import './index.css'

export const App = () => {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

