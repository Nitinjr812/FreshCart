import React, { useState } from 'react';
import './SignUp1.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
function SignUp() {
    let navigate = useNavigate()
    const [data, setdata] = useState({})
    const print = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const Signup = (e) => {
        e.preventDefault()
        let userValue = JSON.parse(localStorage.getItem("SignUp")) || []
        if (!data.email || !data.name || !data.password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All fields are required!",
                allowOutsideClick: false,
                confirmButtonText: "Okay",
            });
            return;
        }


        for (let user of userValue) {
            if (user.email === data.email) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email already exists! Please use a different email.',
                    confirmButtonText: 'Okay',
                });
                return;
            }

        }
        userValue.push(data)
        localStorage.setItem("User", JSON.stringify(userValue))
        Swal.fire({
            icon: "success",
            title: "Signed Up!",
            text: "Welcome, " + data.name + "!",
            allowOutsideClick: false,
            confirmButtonText: "Okay",
        }).then(() => {
            navigate("/");
        });


    }

    return (
        <>
            <Nav />
            <div className="wrap">
                <div className="signup-container">
                    <div className="left-img">
                        <img src="signup-g.svg" alt="" />
                    </div>
                    <div className="form-wrapper">
                        <h2>Create Your <span className='span'>Account</span> </h2>
                        <form >
                            <div className="input-group">
                                <input type="text" placeholder="Name" required name='name' onChange={print} />
                            </div>
                            <div className="input-group">
                                <input type="email" placeholder="Email" name='email' onChange={print} />
                            </div>
                            <div className="input-group">
                                <input type="password" placeholder="Password" name='password' onChange={print} />
                            </div>
                            <button type="button" onClick={Signup} className="submit-button">
                                Register
                            </button>
                            <p className="already-account">
                                Already have an account? <a href="/">Sign In</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SignUp;
