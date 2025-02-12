import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoutes from './Services/ProtectedRoutes';
import Nav from './components/Nav';
import Products2 from './components/Products2'
import Cart from './components/Cart';
import Productdetail from './components/Productdetail';
import Checkout from './components/Checkout';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Nav' element={<Nav />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/' element={<Login />} />
        <Route path='/Cart' element={<Cart />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='Products' element={<Products2 />} />
        <Route path='/Productdetail' element={<Productdetail />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/category' element={<Categories />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
