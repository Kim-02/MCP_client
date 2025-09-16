import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloMcp from './helloMcp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<HelloMcp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;