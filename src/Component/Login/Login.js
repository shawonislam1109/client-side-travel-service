import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import UseTitle from '../Hooks/UserTitle';



const Login = () => {
    const { GoogleSignIn, } = useContext(AuthContext);
    UseTitle('Log in ')
    const provider = new GoogleAuthProvider()
    const { signIn, setLoader } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.form?.pathname || '/'


    const submitHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;



        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoader(false)
            })
    }
    const googleHandleSubmit = () => {
        GoogleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/home')
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='mt-5 md:w-9/12  my-10 mx-auto' >

            <form onSubmit={submitHandle} className=' shadow-2xl p-6 bg-slate-800 rounded-md'>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2  font-medium text-white text-2xl dark:text-gray-300">Your email</label>
                    <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2  font-medium text-white text-2xl  dark:text-gray-300">Your password</label>
                    <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <label htmlFor="remember" className="ml-2 font-medium text-white text-xl  dark:text-gray-300">Remember me</label>

                </div>
                <div>
                    <p className='text-xl  text-red-500 font-medium mb-3'>{error}</p>
                </div>
                <div>
                    <p className='text-xl text-white font-light mb-3'> Create a  <Link className='underline' to='/signup'>new account</Link></p>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                {/* log in site   */}
                <div className='flex justify-center items-center md:block mt-5 '>
                    <p onClick={googleHandleSubmit} className="relative inline-flex  items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            <FaGoogle className='inline w-5 h-5' />   SignIN Google
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;