import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home2 from './pages/Home2.tsx';
import NavBar from './commponent/NavBar.tsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home2/>} />
      </Routes>
    </div>
  );
}

export default App;
