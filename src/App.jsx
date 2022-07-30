import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from '../src/Components/Dashboard/Dashboard'
import Login from '../src/Components/Login/Login'
import Register from '../src/Components/Register/Register'
import Card from './Components/Card/Card';
import AddProduct from './Components/AddProduct/AddProduct';
import LoadPage from './Components/LoadPage/LoadPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allproducts" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
