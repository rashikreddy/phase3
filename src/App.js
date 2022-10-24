import logo from './logo.svg';
import './App.css';
import Header from './Application/header';
import Footer from './Application/footer';
import Welcome from './Application/welcome';
import Aboutus from './Application/aboutus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './Application/services';
import Login from './Application/Login';
import Register from './Application/register';
import ForgetPassword from './Application/forgetpassword';
import Contact from './Application/contact';
import Cart from './Application/cart';
import Admin from './Application/admin';
import Add from './Application/add';
import BusinessOwner from './Application/businessowner';
import BusinessOwner_Operations from './Application/businessowner_opeations';
import Clubs_Operations from './Application/clubs_operations';
import Clubs from './Application/clubs';
import Admin_Operations from './Application/admin_operations';
import Student_Profile from './Application/student_profile';
import StudentProfile_Operations from './Application/studentprofile_operations';
import SuperAdmin from './Application/superadmin';
import Posts from './Application/posts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/' element = {<Welcome/>}/>
            <Route path='aboutus' element={<Aboutus/>}/>
            <Route path='services' element={<Services/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='forgetpassword' element={<ForgetPassword/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='admin' element={<Admin/>}/>
            <Route path='ads' element={<Add/>}/>
            <Route path='businessowner' element={<BusinessOwner/>}/>
            <Route path='businessowner-operations' element={<BusinessOwner_Operations/>}/>
            <Route path='clubs-operations' element={<Clubs_Operations/>}/>
            <Route path='clubs' element={<Clubs/>}/>
            <Route path='admin-operations' element={<Admin_Operations/>}/>
            <Route path='studentprofile' element={<Student_Profile/>}/>
            <Route path='studentprofile-operations' element={<StudentProfile_Operations/>}/>
            <Route path='superadmin' element={<SuperAdmin/>}/>
            <Route path='posts' element={<Posts/>}/>
        </Routes>
      <Footer/> 
      </BrowserRouter>


     
    </div>
  );
}

export default App;
