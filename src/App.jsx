import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
        <Navbar />
        <ItemListContainer greeting="Bienvenido!"/>
        <Footer/>
    </>
  )
}
