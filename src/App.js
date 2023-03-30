import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="container">
      <div className="Content">
        <Calculator />
      </div>
      <div className="Content content-2">
        <Quotes />
      </div>
    </div>
  );
}

export default App;
