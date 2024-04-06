import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import { Navbar } from './components/navbar/Navbar';
import Register from './components/Register';
import Menu from './components/Pages/Menu';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import NewProduct from './components/Pages/NewProduct';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SingUp';
import NoPageFound from './components/NoPageFound';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='*' element={<NoPageFound/>} />
        <Route path='/' element={<Home/>} />
        <Route path='menu' element={<Menu/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='register' element={<Register/>} />
        <Route path='new-product' element={<NewProduct/>} />
        <Route path='login' element={<Login/>} />
        <Route path='sign-up' element={<SignUp/>}  />
</Routes>
    </div>
  );
}

export default App;
