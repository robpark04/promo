import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import PrivacyPolicy from './components/privacy_policy';
import LegalNotice from './components/legal_notice';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/battleVersePromo" element={<Main />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/legal_notice" element={<LegalNotice />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
