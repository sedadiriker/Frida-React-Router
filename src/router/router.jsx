import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"
import Projects from "../pages/projects/Projects"
import NotFound from "../components/Error/NotFound"
import Footer from "../components/Footer/Footer"

const Approuter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Approuter
