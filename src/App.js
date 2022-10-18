import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MealsDetails from "./pages/MealsDetails";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meal/:id" element={<MealsDetails/>}/>
      </Routes>

    </div>
  );
}

export default App;
