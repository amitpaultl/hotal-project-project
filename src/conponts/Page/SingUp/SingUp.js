import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Authantion/Authantion';
import './singup.css'

const SingUp = () => {
    const nayigate = useNavigate();
    const { googleProviter, emailsingup, updateProfil,emailVerification } = useContext(AuthContext)
    
    const handaler = (e) => {

        e.preventDefault()
        const comon = e.target
        const name = comon.name.value;
        const lastName = comon.lastname.value;
        const email = comon.email.value;
        const password = comon.password.value;
        const confrommPassword = comon.conformPassword.value;

        if(password !== confrommPassword){
            return alert('Your email is no same')
        }

        const totalName = name + ' ' + lastName
       

        emailsingup(email, password)
            .then((userCredential) => {
                updateProfil(totalName)
                    .then(() => {
                        emailVerification()
                        .then(() => {
                            alert('Pleace check your email')
                          });
                        
                    }).catch((error) => {
                        const errorMessage = error.message;
                        toast.warning(errorMessage)
                    });
                const user = userCredential.user;
                toast.warning('re')
                console.log(user);
                // nayigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }

    const googleHandaler = () => {
        googleProviter()
            .then((result) => {
                const user = result.user;
                console.log(user);
                nayigate('/')
            }).catch((error) => {
                const errorMessage = error.message;
                // ...
            });
    }

    return (
        <div className='container my-5'>

            <div className='row'>
                <div className="col-md-6 offset-md-3">
                    <div className="input-box">
                        <form onSubmit={handaler}>
                            <h2 className='input-title'>Sing Up</h2>
                            <div className="user">
                                <label htmlFor="name">First Name</label>
                                <div className="input">
                                    <input type="text" name='name' />
                                </div>
                            </div>
                            <div className="user">
                                <label htmlFor="lastname">Last Name</label>
                                <div className="input">
                                    <input type="text" name='lastname' />
                                </div>
                            </div>
                            <div className="user">
                                <label htmlFor="email">Email</label>
                                <div className="input">
                                    <input type="email" name='email' />
                                </div>
                            </div>
                            <div className="user">
                                <label htmlFor="Password">Password</label>
                                <div className="input">
                                    <input type="password" name='password' />
                                </div>
                            </div>
                            <div className="user">
                                <label htmlFor="conformPassword">Conform Password</label>
                                <div className="input">
                                    <input type="password" name='conformPassword' />
                                </div>
                            </div>
                            <button className='submit'>Create Account</button>
                            <p className='anather'>Already have an account? <Link to={'/login'}>Login</Link> </p>
                        </form>
                    </div>

                </div>
                <div className="col-md-4 offset-md-4">
                    <div className="popup">

                        <button >Continue with Facebook</button>
                        <button onClick={googleHandaler}>Continue with Google</button>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default SingUp;