import './App.css';
import {router} from "./components/Router/Router";
import { RouterProvider } from "react-router-dom";
import Cabecera from "./components/Cabecera/Cabecera";
import Pie from "./components/Pie/Pie";

function App() {
  return (
    <div className="App">
        <div className="w-full min-h-screen">
            <Cabecera/>
            <RouterProvider router={router} />
            <Pie/>
        </div>
    </div>
  );
}
/*
    <div style={{
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white"}}>
        <RouterProvider router={router} />
    </div>
    
    O BIEN: 

    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-lg">
        <RouterProvider router={router} />
    </div>
*/
export default App;