import "./App.css"
import Navbar from "./Componants/Navbar/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Cart from "./Pages/Cart"
import Product from "./Pages/Product"
import LoginSignUp from "./Pages/LoginSignUp"
import Footer from "./Componants/Footer/Footer"
import men_banner from "./Componants/Assets/banner_mens.png"
import women_banner from "./Componants/Assets/banner_women.png"
import kids_banner from "./Componants/Assets/banner_kids.png"

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
