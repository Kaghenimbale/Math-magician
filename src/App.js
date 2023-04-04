import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
}

export default App;
