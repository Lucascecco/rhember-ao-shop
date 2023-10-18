import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemList/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'

export default function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoria" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Container>
    </BrowserRouter>
  )
}
