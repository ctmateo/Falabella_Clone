import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />}/>
        </Routes>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>


  );
}


export default App;
