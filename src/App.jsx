import NavigationBar from "./NavigationBar.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About"
import Company from "./pages/Company"
import Ressources from "./pages/Ressources";
import Contact from "./pages/Contact";
import {Route, Routes} from 'react-router-dom'

function App(){
    console.log(window.location)
    return (
        
        <>
        <NavigationBar />
        <div className="">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Company" element={<Company />} />
                <Route path="/Ressources" element={<Ressources />} />
                <Route path="/Contact" element={<Contact />} />

                
            </Routes>
        </div>
        </>
    )
}

export default App