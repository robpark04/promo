import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import MainPage from './pages/main_page';
import PrivacyPolicy from './components/privacy_policy';
import LegalNotice from './components/legal_notice';

import Unilink from './components/unilink';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <><Header /><MainPage /><Footer /></>
          } />
          <Route path="/privacy_policy" element={
            <><Header /><PrivacyPolicy /><Footer /></>
          } />
          <Route path="/legal_notice" element={
            <><Header /><LegalNotice /><Footer /></>
          } />
          <Route path="/unilink" element={<Unilink />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
