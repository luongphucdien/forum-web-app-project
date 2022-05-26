import './App.css';
import Nav from './Nav/Nav';
import Register from './Register/Register';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import MainRoutes from './routes/main routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Nav />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
      <MainRoutes/>
    </div>
  );
}

export default App;
