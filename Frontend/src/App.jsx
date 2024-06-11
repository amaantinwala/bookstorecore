import Home from './Home';
import Signup from './components/Signup';
import Courses from './courses/Courses';
import Login from './components/Login';
import Contact from './components/Contact';
import {Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course' element={<Courses />}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </>
  )
}

export default App