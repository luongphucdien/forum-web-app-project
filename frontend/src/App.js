import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import SignIn from './pages/sign in/sign in';
import Register from './pages/register/register';
import Nav from './nav/nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Nav/>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/sign-in" element={<SignIn/>} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
