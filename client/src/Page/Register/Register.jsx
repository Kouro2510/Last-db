import config from "~/config";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AiFillCheckCircle} from "react-icons/ai";

const Register = () => {
    const [firstname,setFirstName]=useState("");
    const [lastname,setLastName]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassWord]=useState("");
    const [confirmPass,setConfirmPass]=useState("");
    const [checkPass,setCheckPass]=useState("");
  return(
      <section className="overflow-hidden dark:bg-gray-900">
          <div className="flex justify-center min-h-screen">
              <div className=" hidden  bg-cover  relative top-20  lg:block lg:w-3/5 "></div>
              <div className=" flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                  <div className="w-full">
                      <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                          Get your account now.
                      </h1>
                      <p className="mt-4 text-gray-500 dark:text-gray-400">
                          Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                      </p>
                      <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                          <div>
                              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                              <input type="text" placeholder="Name"
                                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                          </div>

                          <div>
                              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                              <input type="text"
                                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                          </div>

                          <div>
                              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                              <input type="text" placeholder="XXX-XX-XXXX-XXX"
                                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                          </div>

                          <div>
                              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                              <input type="email" placeholder="johnsnow@example.com"
                                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                          </div>

                          <div>
                              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                              <input type="password" placeholder="Enter your password"
                                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                              <AiFillCheckCircle/>
                          </div>

                          <div>
                              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                              <input type="password" placeholder="Enter your password"
                                     className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                          </div>

                          <button
                              className="flex items-center justify-between w-36 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                              <span>Sign Up </span>

                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20"
                                   fill="currentColor">
                                  <path fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"/>
                              </svg>
                          </button>
                      </form>
                      <div  className="mt-5"> <p  style={{color:"#3b82f6"}} href={config.routes.home}>If you have account ? <span className="underline"><a href={config.routes.login}>Sign in</a></span></p></div>
                  </div>
              </div>
          </div>
      </section>
  )
}
export default Register