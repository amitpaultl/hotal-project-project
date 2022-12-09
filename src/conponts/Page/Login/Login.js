import { signInWithRedirect } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authantion/Authantion';
import useTitle from '../../Hook/UsrHook';

const Login = () => {
    useTitle('login')
    const nayigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {googleSingin, eamilsingin,setLoader} = useContext(AuthContext)

    const handaler = (e) =>{
        e.preventDefault()
       const comon = e.target
       const email = comon.email.value;
       const password = comon.password.value;

       eamilsingin(email,password)

       .then((userCredential) => {
        const user = userCredential.user;

        if(user.emailVerified){

            nayigate(from,{replace:true})

        }else{
           return alert('your email is no vieyfi')
        }

       
        
        
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
      
      .finally(()=>{
        setLoader(false)
      })


       

   }

   const googleHandaler= () =>{
        googleSingin();
        nayigate(from,{replace:true})
   }

    return (
        <div className='container my-5'>

            <div className='row'>
                <div className="col-md-6 offset-md-3">
                    <div className="input-box">
                        <form onSubmit={handaler}>
                            <h2 className='input-title'>Sing in</h2>
                            <div className="user">
                                <label htmlFor="email">Email</label>
                                <div className="input">
                                    <input type="email" name='email'  />
                                </div>
                            </div>
                            <div className="user">
                                <label htmlFor="Password">Password</label>
                                <div className="input">
                                    <input type="password" name='password' />
                                </div>
                            </div>
                            <button className='submit'>Create Account</button>
                            <p className='anather'>Already have an account? <Link to={'/singup'}>Sing Up</Link> </p>
                        </form>
                    </div>

                </div>
                <div className="col-md-4 offset-md-4">
                    <div className="popup">

                        <button>Continue with Facebook</button>
                        <button onClick={googleHandaler}>Continue with Google</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;