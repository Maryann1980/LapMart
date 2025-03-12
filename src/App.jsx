import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {NavBar} from './components/NavBar';
import Shop from './pages/shop/Shopp';
import Cart from './pages/cart/Cartt';
import ShopContextProvider from './context/Shop-context';
import Footer from './components/Footer';
import "./App.css"; 



function App() {
  return (
    <div className="app">
      <ShopContextProvider>
        <Router>
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;