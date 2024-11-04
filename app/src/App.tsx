import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './home/Home';
import Admin from './admin/Admin';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
