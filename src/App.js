import {BrowserRouter,Routes,Route} from "react-router-dom"
import Service from "./pages/Service"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="service" element={<Service/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}


