import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Quote from './components/Quote';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
