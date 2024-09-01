import * as React from 'react';
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import CameraCapture from './components/Camera';



function App() {

  return (
    <div className='flex items-center justify-center h-screen '>

      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<CameraCapture />} />
      </Routes>
    </div>






    
  )
}

export default App;
