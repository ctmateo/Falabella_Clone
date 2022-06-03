import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/Falabella_Clone" element={<Header />}/>
        </Routes>
        <Routes>
          <Route path='/Falabella_Clone' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>


  );
}


export default App;
