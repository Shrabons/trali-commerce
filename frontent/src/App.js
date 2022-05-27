import { Route, Routes } from 'react-router-dom';
import Menubar from './components/menu/Menubar';
import Login from './components/users/Login';
import Signup from './components/users/Signup';
import Home from './pages/Home';

function App() {
  return (
    <>
     <Menubar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/signup' element={<Signup />} />
       <Route path='/login' element={<Login />} />
     </Routes>
      
    </>
  );
}

export default App;
