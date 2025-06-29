
import './App.scss'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitorSystem from './pages/VisitorSystem';


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/visitorsystem' element={<VisitorSystem />} />
    </Routes>
  </Router>
  )
}

export default App;
