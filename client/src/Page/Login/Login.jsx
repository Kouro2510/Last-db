import './login.scss'
import config from "~/config";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginUser} from "~/redux/apiReques";
import { IoCarSport } from 'react-icons/io5';
import BannerLogin from "../../Asset/imgLogin.jpg"
const Login = () => {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const OnchangeInput = (e, id) => {
    if (id === 'username') {
      setUsername(e.target.value);
    }
    if (id === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await loginUser(username, password, dispatch, navigate);
    console.log('check res from login:>>>', res);

    if (res && res.errCode === 3) {
      setMessage(res.errMessage);
    } else if (res && res.errCode === 1) {
      setMessage(res.errMessage);
    } else if (res && res.errCode === 0 && res.user.role === 'Employee') {
      navigate(config.routes.dashboard);
    } else if (res && res.errCode === 0 && res.user.role === 'Admin') {
      navigate(config.routes.dashboard);
    }else if(res && res.errCode === 0 && res.user.role === 'Customer'){
      navigate(config.routes.home);
    }

    if (!res) {
      setMessage('An error occurred, please try again later!!!');
    }

    console.log('check res from login:>>>', res);
  };
  return(
      <section className="overflow-hidden dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
          <div className=" hidden  bg-cover relative top-48 max-[1024px]:left-2  min-[2560px]:left-10  lg:block ">
            <img src={BannerLogin} alt="banner"/>

          </div>
          <div className=" flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <IoCarSport className="ml-56 max-[320px]:ml-6 max-[425px]:ml-24 max-[375px]:ml-14 max-[768px]:ml-64 max-[1024px]:ml-28 max-[1440px]:ml-36"  size="200"/>
              <h1 className="text-3xl max-[320px]:text-2xl text-center font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Login to website
              </h1>

              <form className="flex flex-col items-center  gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username or Email</label>
                  <input type="text" placeholder="Username or Email"   value={username}
                         onChange={(e) => OnchangeInput(e, 'username')}
                         className="block min-[1440px]:w-96 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                  <input type="password" placeholder="Enter your password" value={password}
                         onChange={(e) => OnchangeInput(e, 'password')}
                         className="block  min-[1440px]:w-96 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>
                {message ? (
                    <>
                      <div className="message">{message}</div>
                    </>
                ) : (
                    ''
                )}
                <button  onClick={(e) => handleSubmit(e)}
                    className="flex text-center items-center justify-between w-36 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span>Sign Up </span>

                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20"
                       fill="currentColor">
                    <path fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"/>
                  </svg>
                </button>
                <div  className="mt-5"> <p  style={{color:"#3b82f6"}}>If you don't have account ? <span className="underline"><a href={config.routes.home}>Sign in</a></span></p></div>
              </form>

            </div>
          </div>
        </div>
      </section>
  )
}
export default Login;