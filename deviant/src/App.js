
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import {Explore,Filters} from "./Components/Pages/Explore/Explore";
import Forums from "./Components/Pages/Forums/Forums";
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import Footer  from "./Components/Footer/Footer";

function App() {
  return (
  <Router>
    <div className="App">

        <NavBar/>
        <SideNavBar/>
         <Routes>
             <Route  path="/explore" element={<Explore/>}/>
             <Route  path="/forums" element={<Forums/>}/>
         </Routes>
        <Footer/>
    </div>
  </Router>
  );
}

export default App;
