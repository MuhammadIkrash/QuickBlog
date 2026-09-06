import { RouterProvider } from "react-router-dom";
import { routers } from "./Routes/Router.jsx";
const App = () => {
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
};

export default App;
