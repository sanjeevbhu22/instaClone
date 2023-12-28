import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile  from './components/Profile';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
