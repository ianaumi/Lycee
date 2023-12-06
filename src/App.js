import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home-page';
import CampusPage from './Routes/CampusPage';
import AboutPage from './Routes/About-page';

function App() {
  return (
    <div className='App'>

      <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/About"element={<AboutPage/>}/>
          <Route path="/Campus"element={<CampusPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
