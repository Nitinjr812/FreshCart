import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login1.css';
import Swal from 'sweetalert2';
import Nav from './Nav';
import Footer from './Footer';

const Login = () => {
    let Navigate = useNavigate();
    const [data, setdata] = useState([]);
    const printData = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };
    const login = (e) => {
        e.preventDefault();
        let userdata = JSON.parse(localStorage.getItem("User")) || [];
        let filterData = userdata.filter((items) => {
            if (data.email === items.email && data.password === items.password) {
                localStorage.setItem("logged", true);
                return items;
            }
        });
        let user = filterData[0];
        if (filterData[0]) {
            Swal.fire({
                icon: 'success',
                title: 'Login Successful!',
                text: `Welcome Back ${filterData[0].name}!`,
                confirmButtonText: 'Okay',
            }).then(() => {
                Navigate('/Home', { state: user });
                localStorage.setItem("currentuser",JSON.stringify(user))
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User does not exist or credentials are incorrect!',
                confirmButtonText: 'Try Again',
            });
        }
    };

    return (
        <>
            <Nav />
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="login-image">
                        <img src="./signin-g.svg" alt="hei" />
                    </div>
                    <form>
                        <div className="form-group">
                            <h1 className='text-center'>Login To <span className='span'>FreshCart</span></h1>
                            <p className='graph'>Welcome back to FreshCart! Enter your email to get started.</p>
                            <input
                                onChange={printData}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={printData}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter Your password"
                                required
                            />
                        </div>
                        <button type="submit" className='btn-primary' onClick={login}>Login</button>
                        <Link to="/Signup">
                            <button className="btn-secondary">Don't Have Acc.</button>
                        </Link>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
