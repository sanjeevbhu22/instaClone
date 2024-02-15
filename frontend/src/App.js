import React,{createContext,useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile  from './components/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Createpost from './components/Createpost';
import { loginContext } from './context/LoginContext';
import Modal from './components/Modal';


function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <loginContext.Provider value={{setUserLogin, setModalOpen}}>
                <Navbar login={userLogin}/>
              <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='/SignUp' element={<SignUp/>}></Route>
                <Route path='/SignIn' element={<SignIn/>}></Route>
                <Route path='/Profile' element={<Profile/>}></Route>
                <Route path='/Createpost' element={<Createpost/>}></Route>
              </Routes>
              <ToastContainer  theme='dark'/>
              {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
        </loginContext.Provider>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
