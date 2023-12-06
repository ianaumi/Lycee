import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home-page';
import Campus from './Components/Campus-component/Campus';

function App() {
  return (
    <div className='App'>

      <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/Campus"element={<Campus/>}/>
      </Routes>
    </div>
  );
}

export default App;
