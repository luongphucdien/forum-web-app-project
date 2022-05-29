import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import SignIn from './pages/sign in/sign in';
import Register from './pages/register/register';
import Nav from './nav/nav';
import MainRoutes from './routes/main routes';

function App() {
  return (
    <div className="App">
      <MainRoutes/>
    </div>
  );
}

export default App;
