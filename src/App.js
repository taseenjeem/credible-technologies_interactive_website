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
import RequireAuth from './Components/RequireAuth/RequireAuth';
import MyOrders from './Components/Dashboard/MyOrders';
import AddAReview from './Components/Dashboard/AddAReview';
import MyProfile from './Components/Dashboard/MyProfile';
import AllUsers from './Components/Dashboard/AllUsers';

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
            <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>

              <Route index element={<MyOrders />} />
              <Route path='add-review' element={<AddAReview />} />
              <Route path='my-profile' element={<MyProfile />} />
              <Route path='all-users' element={<AllUsers />} />

            </Route>
            <Route path='/purchase/:id' element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>} />
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
