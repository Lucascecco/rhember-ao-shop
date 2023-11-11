import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemList/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import CartContext from './context/CartContext'
import CheckoutContainer from './components/Cart/CheckoutContainer'

export default function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <CartContext>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<CheckoutContainer />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartContext>
      </Container>
    </BrowserRouter>
  )
}
