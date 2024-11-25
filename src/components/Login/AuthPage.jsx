import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import login from '../../assets/login.png';
import register from '../../assets/register.png';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const AuthPage = () => {
  const search = useLocation().search;
  const [isLogin, setIsLogin] = useState(
    search == '?isLogin=true' ? true : false,
  );
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className={`flex h-screen bg-base-100 items-center`}>
      <motion.div
        key={isLogin ? 'loginImage' : 'registerImage'}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className='hidden lg:flex w-1/2 items-center justify-end pr-16'
      >
        <img
          src={isLogin ? login : register}
          alt={isLogin ? 'Login' : 'Register'}
          className='max-w-lg rounded-lg shadow-lg'
        />
      </motion.div>
      <div className='w-full lg:w-1/2 flex items-center justify-center px-8'>
        <div className='card bg-white w-full max-w-md rounded-lg'>
          <div className='card-body'>
            <h2 className='text-3xl font-bold text-center mb-6 text-accent'>
              Welcome to Learning Arc
            </h2>
            <div className='flex justify-center gap-4 mb-6'>
              <button
                onClick={() => setIsLogin(true)}
                className={`w-1/2 py-2 rounded-lg font-medium transition ${
                  isLogin
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`w-1/2 py-2 rounded-lg font-medium transition ${
                  !isLogin
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                }`}
              >
                Register
              </button>
            </div>
            <motion.div
              key={isLogin ? 'login' : 'register'}
              initial='initial'
              animate='animate'
              exit='exit'
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              {isLogin ? (
                <form>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text font-medium text-accent'>
                        Username
                      </span>
                    </label>
                    <input
                      type='email'
                      placeholder='Enter your username'
                      className='input input-bordered focus:border-primary focus:outline-none'
                      required
                    />
                  </div>
                  <div className='form-control mt-4'>
                    <label className='label'>
                      <span className='label-text font-medium text-accent'>
                        Password
                      </span>
                    </label>
                    <div className='relative'>
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder='Enter your password'
                        className='input input-bordered w-full focus:border-primary focus:outline-none'
                        required
                      />
                      <button
                        type='button'
                        className='absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-800'
                        onClick={togglePasswordVisibility}
                      >
                        <FontAwesomeIcon
                          icon={passwordVisible ? faEyeSlash : faEye}
                          className='w-5 h-5'
                        />
                      </button>
                    </div>
                    <label className='label mt-4'>
                      <a
                        href='#'
                        className='label-text-alt text-red-500 link link-hover hover:text-primary transition-all'
                      >
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className='form-control mt-6'>
                    <button className='btn btn-primary w-full'>Login</button>
                  </div>
                </form>
              ) : (
                <form>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text font-medium'>Email</span>
                    </label>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className='input input-bordered focus:border-primary focus:outline-none'
                      required
                    />
                  </div>
                  <div className='form-control mt-4'>
                    <label className='label'>
                      <span className='label-text font-medium'>Username</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Enter your username'
                      className='input input-bordered focus:border-primary focus:outline-none'
                      required
                    />
                  </div>
                  <div className='form-control mt-4'>
                    <label className='label'>
                      <span className='label-text font-medium'>Password</span>
                    </label>
                    <div className='relative'>
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder='Enter your password'
                        className='input input-bordered w-full focus:border-primary focus:outline-none'
                        required
                      />
                      <button
                        type='button'
                        className='absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-800'
                        onClick={togglePasswordVisibility}
                      >
                        <FontAwesomeIcon
                          icon={passwordVisible ? faEyeSlash : faEye}
                          className='w-5 h-5'
                        />
                      </button>
                    </div>
                  </div>
                  <div className='form-control mt-6'>
                    <button className='btn btn-primary w-full'>Register</button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
