//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SignUpSubmmit from './components/SignUpSubmmit';
import LoginSubmmit from './components/LoginSubmmit';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route  path = "/LoginSubmmit" element = {<LoginSubmmit/>}  />
      <Route  path = "/SignUpSubmmit" element = {<SignUpSubmmit/>} />
    {/* <div className="App">
      <Home />
      <SignUpSubmmit />
      <LoginSubmmit />
    </div> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
