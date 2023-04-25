import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Education } from './pages/Education/Education';
import { Projects } from './pages/Projects/Projects';
import { Skills } from './pages/Skills/Skills';
import { Eror404 } from './pages/Eror404/Eror404';
import { Contact } from './pages/Contact/Contact';
// import { SignInPop } from "./components/Login/SignIn/SignInPop";
import { SignUpPop } from "./components/Login/SignUp/SignUpPop";
import SignInPop from "./components/Login/SignIn/SignInPop";




function App() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Eror404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
