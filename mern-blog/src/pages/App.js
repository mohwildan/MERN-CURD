
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import Register from './register/Register'
import Myapp from '../myapp/Myapp';

function App() { 
  return (
   <Routes>

     <Route path='/' element={<Myapp />}/>
     <Route path='/login' element={<Login />}/>
     <Route path='/register' element={<Register />}/>
   </Routes>
  );
}

export default App;
