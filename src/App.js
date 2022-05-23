import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import InvalidPage from './Components/InvalidPage/InvalidPage';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import ResetPass from './Components/ResetPass/ResetPass';
import SignUp from './Components/SignUp/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Dashboard from './Components/Dashboard/Dashboard';
import Purchase from './Components/Purchase/Purchase';

function App() {
  return (
    <section>

      <Navbar>

        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/reset-password' element={<ResetPass />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/purchase/:id' element={<Purchase />} />
            <Route path='*' element={<InvalidPage />} />
          </Routes>
        </ScrollToTop>

        <Footer />
      </Navbar>
      <ToastContainer />
    </section>
  );
}

export default App;
