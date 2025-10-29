import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
