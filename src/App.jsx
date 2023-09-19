import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Coins from "./components/Coins"
import CoinDetails from "./components/CoinDetails"
import Exchanges from "./components/Exchanges"
import Header from "./components/Header"
import ColorModeSwitcher from "./ColorModeSwitcher"
import Footer from "./components/Footer"

function App() {


  return (
      <Router>
        <ColorModeSwitcher/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/coins" element={<Coins/>} />
          <Route path="/coin/:id" element={<CoinDetails/>} />
          <Route path="/exchanges" element={<Exchanges/>} />
        </Routes>
        <Footer/>
      </Router>
  )
}

export default App
