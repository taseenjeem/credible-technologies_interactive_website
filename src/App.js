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
import auth from './Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import AllReviews from './Components/AllReviews/AllReviews';
import UpdateProduct from './Components/Dashboard/AdminDashboard/UpdateProduct';
import UpdateQuantity from './Components/Dashboard/AdminDashboard/UpdateQuantity';
import Payment from './Components/Payment/Payment';
import UpdateProfile from './Components/Dashboard/UpdateProfile';
import AboutUs from './Components/About/AboutUs';
import ContactUs from './Components/Contact/ContactUs';
import Terms from './Components/Term/Terms';
import Overview from './Components/Dashboard/AdminDashboard/Overview';
import { useQuery } from 'react-query';
import Loading from './Components/Loading/Loading';
import { useState } from 'react';

function App() {
  const [user] = useAuthState(auth);

  const { data, isLoading, refetch } = useQuery('admin', () => fetch(`https://credible-technologies.herokuapp.com/admin/${user?.email}`,
    {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
  )

  if (!data?.admin) {
    refetch()
  };
  if (isLoading) { <Loading /> }
  console.log(data);

  return (
    <section>

      <Navbar />

      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/reset-password' element={<ResetPass />} />
          <Route path='/reviews' element={<AllReviews />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/terms-and-conditions' element={<Terms />} />

          {
            data?.admin ?
              <>
                <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
                  <Route index element={<RequireAdmin><Overview /></RequireAdmin>} />
                  <Route path='all-users' element={<RequireAdmin><AllUsers /></RequireAdmin>} />
                  <Route path='overview' element={<RequireAdmin><Overview /></RequireAdmin>} />
                  <Route path='add-product' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
                  <Route path='manage-all-products' element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
                  <Route path='manage-all-orders' element={<RequireAdmin><ManageOrders /></RequireAdmin>} />
                  <Route path='update-a-product/:id' element={<RequireAdmin><UpdateProduct /></RequireAdmin>} />
                  <Route path='update-product-quantity/:id' element={<RequireAdmin><UpdateQuantity /></RequireAdmin>} />
                  <Route path='my-profile' element={<MyProfile />} />
                  <Route path='update-profile/:id' element={<UpdateProfile />} />
                </Route>
              </>
              :
              <>
                <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
                  <Route index element={<MyOrders />} />
                  <Route path='add-review' element={<AddAReview />} />
                  <Route path='my-orders' element={<MyOrders />} />
                  <Route path='my-profile' element={<MyProfile />} />
                  <Route path='update-profile/:id' element={<UpdateProfile />} />
                  <Route path='payment/:id' element={<Payment />} />
                </Route>
              </>
          }

          <Route path='/purchase/:id' element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>} />
          <Route path='*' element={<InvalidPage />} />
        </Routes>
      </ScrollToTop>

      <Footer />

      <ToastContainer />
    </section>
  );
}

export default App;
