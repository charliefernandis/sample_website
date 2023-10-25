import './App.css';
import {Route , Router, Routes} from "react-router-dom";
import Home from './components/home/home';
import Signin from './components/signin/signin';
import Login from './components/signin/login';
import MainContent from './components/mainContent/mainContent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pdfDownload" element={<MainContent />} />
    </Routes>
  );
}

export default App;
