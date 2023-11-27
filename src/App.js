import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Map from './Routes/Map';

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
