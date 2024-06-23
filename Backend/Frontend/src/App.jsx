import Home from './Home';
import Signup from './components/Signup';
import Courses from './courses/Courses';
import Login from './components/Login';
import Contact from './components/Contact';
import {useAuth} from '../src/context/AuthProvider.jsx';
import {Navigate, Route, Routes} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [authUser, setauthUser] = useAuth();
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course' element={authUser?<Courses />:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App