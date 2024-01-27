import NavBar from "./Components/NavBar";
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <div>
        <NavBar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
