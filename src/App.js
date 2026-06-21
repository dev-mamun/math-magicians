import { Container } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Container className="p-4 mx-auto">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="*" element={<div>If page not found it goes here</div>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
