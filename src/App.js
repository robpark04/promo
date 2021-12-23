import './App.css';

import Main from './components/main';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/battleVersePromo" element={<Main />} />
          {/* <Route path="/battleVersePromo" element={<Slide />} /> */}
          {/* <Route path={'/profile'} element={<Content openSwap={openSwap} setOpenSwap={setOpenSwap} />} /> */}
          {/* <Route path={'/staking'} element={<Earnings openSwap={openSwap} setOpenSwap={setOpenSwap} />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
