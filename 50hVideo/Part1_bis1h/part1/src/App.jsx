import Greet from "./components/Greet.jsx";
import Add from "./components/Add.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Abfrage from "./components/Abfrage.jsx";
import JSXRules from "./components/JSXRules.jsx"
import Brac from "./components/bracets.jsx"
import Begrusung from "./components/Begrusung.jsx"
import ProductInfo from "./components/ProductInfo.jsx";
import Liste from "./components/List.jsx";
function App() {

    const myName = "Eric Buthmann"
    const muliply = (a, b) => a * b;
    const specialClass="simple-class"


    return (
        <div>
        <Header/>
            <Home />
            <Begrusung/>
            <Abfrage />
            <JSXRules />
            <Brac />
            <p>{myName}</p>
            <p> My Friends List : {['Lukas', 'Tim', 'Tom']}</p>
            <p>2*2 = {muliply(2, 2)}</p>
            <p className={specialClass}> This is a special Class</p>
            <ProductInfo/>
            <Liste/>

            <Footer/>
            

        </div>
    );
};

export default App;