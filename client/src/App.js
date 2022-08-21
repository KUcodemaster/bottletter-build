import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage.js';
import { Writepage } from './pages/Writepage.js';
import { Viewpage } from './pages/Viewpage.js';
import { SignInpage } from './pages/SignInpage.js';
import { SignUppage } from './pages/SignUppage.js';
import { Indexpage } from './pages/index.js';
import { Homepage2 } from './pages/Homepage2.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/h2" element={<Homepage2 />}/>
        <Route path="/write" element={<Writepage />}/>
        <Route path="/index" element={<Indexpage />}/>
        <Route path="/view" element={<Viewpage />}/>
        <Route path="/signin" element={<SignInpage />}/>
        <Route path="/signup" element={<SignUppage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
