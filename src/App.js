import logo from './logo.svg';
import './App.css';
import { Button, Container } from 'react-bootstrap';
import NavContainer from './components/NavContainer';
import { CartProvider } from './hooks/useCart';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Checkout from './screens/Checkout';
import Product from './screens/Product';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div style={{backgroundColor: "#dcdcdc", minHeight: '100vh'}}>
      <Router>
        <CartProvider>      
          <div className="App">
            <NavContainer />
          </div>
        <Container>
          <div style={{paddingTop: 100}}></div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Container>
        <Toaster></Toaster>
        </CartProvider>
      </Router>
      <div style={{paddingBottom: 50}}></div>
    </div>
  );
}

export default App;
