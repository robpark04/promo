import {useState} from 'react'
import './App.css';

import Header from './components/Header';
import Play from './components/Play';
import Content from './components/Content';
import Earnings from './components/Earnings';
// import Game from './components/Game';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  let [openSwap, setOpenSwap] = useState(false)
  return (
    <div className="App">
      <Router>
      <Header openSwap={openSwap} setOpenSwap={setOpenSwap} />
      <Routes>
          <Route path="/versus" element={<Play openSwap={openSwap} setOpenSwap={setOpenSwap} />} />
          <Route path={'/profile'} element={<Content openSwap={openSwap} setOpenSwap={setOpenSwap} />} />
          <Route path={'/staking'} element={<Earnings openSwap={openSwap} setOpenSwap={setOpenSwap} />} />
        {/* <Game /> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
