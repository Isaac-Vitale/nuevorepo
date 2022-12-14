
import './App.css';
// import Button from './components/buttons';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Game from './pages/game';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/game' element={<Game/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
