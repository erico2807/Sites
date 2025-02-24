import './css/App.css';
import Moviecard from "./component/MoviCard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import NavBar from "./component/Navbar";
import { MovieProvider } from "./context/MovieContext";

function App() {


    return (
       <MovieProvider>
            <NavBar />
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Home/> }/>
                <Route path="/favorites" element={<Favorites/>}/>
            </Routes>
            </main>
            </MovieProvider>
    )
  
}



export default App
