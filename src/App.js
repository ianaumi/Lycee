import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home-page';
import Map from './Routes/Map-page';

function App() {
  return (
    <div className='App'>

      <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/Map"element={<Map/>}/>
      </Routes>

    </div>
  );
}

export default App;
