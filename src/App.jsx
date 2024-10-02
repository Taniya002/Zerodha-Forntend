
import HomePage from './landingPage/Home/Homepage'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./landingPage/signup/Signup"
import AboutPage from "./landingPage/about/AboutPage"
import ProductPage from "./landingPage/products/ProductPage"
import PricingPage from './landingPage/pricing/PricingPage'
import SupportPage from "./landingPage/support/SupportPage"
import Nav_bar from '../Nav_bar'
import Footer from '../Footer'
import Not_found from './landingPage/Not_found'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Nav_bar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/product' element={<ProductPage/>}></Route>
      <Route path='/pricing' element={<PricingPage/>}></Route>
      <Route path='/support' element={<SupportPage/>}></Route>
      <Route path='*' element={<Not_found/>}></Route>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
