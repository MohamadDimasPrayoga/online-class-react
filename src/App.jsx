import{Routes, Route} from "react-router-dom"
import  NavbarComp  from "./components/NavbarComp";
import  FooterComp  from "./components/FooterComp";
import  HomePage  from "./pages/HomePage";
import  KelasPage  from "./pages/KelasPage";
import  FaqPage from "./pages/FaqPage";
import  SyaratPage  from "./pages/SyaratPage";
import  TestiPage  from "./pages/TestiPage";




function App() {
  return(
    <div>
      <NavbarComp />
      

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestiPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratPage} />
      </Routes>

      <FooterComp />
    </div>
  )
}

export default App;
