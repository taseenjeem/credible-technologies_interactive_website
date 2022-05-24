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
import AllUsers from './Components/Dashboard/AdminDashboard/AllUsers';
import RequireAdmin from './Components/RequireAdmin/RequireAdmin';
import ManageOrders from './Components/Dashboard/AdminDashboard/ManageOrders';
import ManageProducts from './Components/Dashboard/AdminDashboard/ManageProducts';
import AddProduct from './Components/Dashboard/AdminDashboard/AddProduct';
import useAdmin from './hooks/useAdmin';
import auth from './Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import AllReviews from './AllReviews/AllReviews';

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

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
            <Route path='/reviews' element={<AllReviews />} />
            <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>



              {
                admin ?
                  <Route index element={<RequireAdmin><ManageOrders /></RequireAdmin>} />
                  :
                  <Route index element={<MyOrders />} />
              }
              <Route path='add-review' element={<AddAReview />} />
              <Route path='my-profile' element={<MyProfile />} />
              <Route path='all-users' element={<RequireAdmin><AllUsers /></RequireAdmin>} />
              <Route path='add-product' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
              <Route path='manage-all-products' element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
              <Route path='manage-all-orders' element={<RequireAdmin><ManageOrders /></RequireAdmin>} />

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
