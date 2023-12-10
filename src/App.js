import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home-page';
import CampusPage from './Routes/CampusPage';
import AboutPage from './Routes/About-page';
import EventPage from './Routes/Events-page';

function App() {
  return (
    <div className='App'>

      <Routes>
          <Route path="/Lycee"element={<Home/>}/>
          <Route path="/About"element={<AboutPage/>}/>
          <Route path="/Campus"element={<CampusPage/>}/>
          <Route path="/Events"element={<EventPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
