import React, { useState } from 'react'
import Hero from '../assets/login-hero.png'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");


  return (
    <div className="flex lg:grid lg:grid-cols-2 items-center gap-4 max-md:mt-5">
        <div className="w-full h-full hidden lg:flex relative">
          <img src={Hero} alt="" className="w-full bg-cover h-full" />
        </div>
        <div className="flex items-center max-lg:border max-lg:rounded-2xl  max-[340px]:mx-2 max-sm:m-8 max-lg:m-36 max-lg:py-16 max-sm:py-4 max-lg:shadow-lg max-sm:mt-24 w-full justify-center flex-col gap-2 md:gap-10">
          <form
            action=""
            className="flex flex-col md:gap-10 gap-4 px-4 w-full md:px-20 "
          >
            <img src={Logo} alt="" className='w-[120px] flex justify-center mx-auto' />
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='flex flex-col gap-3'> Name*
            <input
              type="name"
              name="userName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder=""
              className="text-lg md:text-xl outline-none border-b w-full bg-gray-100 p-3"
            />
            </label>
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='flex flex-col gap-3'> Email*
            <input
              type="email"
              name="userEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder=""
              className="text-lg md:text-xl outline-none border-b w-full bg-gray-100 p-3"
            />
            </label>
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='flex flex-col gap-3'> Phone Number*
            <input
              type="tel"
              name="userPhone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder=""
              className="text-lg md:text-xl outline-none border-b w-full bg-gray-100 p-3"
            />
            </label>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="" className='flex flex-col gap-3'> Password*
              <input
                type='password'
                name="userPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder=""
                className="text-lg md:text-xl outline-none border-b w-full bg-gray-100 p-3"
              />
              </label>
            </div>
            <div className=" text-white max-sm:mt-2 max-sm:text-sm flex flex-col   w-full gap-2">
              <button
                //   onClick={}
                  className="bg-black w-full px-2 py-1 md:px-4 md:py-2 text-lg rounded-md font-semibold text-white transition duration-300 ease-in"
                >
                  Sign Up
                </button>
            </div>
          </form>
          <Link to="/login" className="text-black text-sm font-medium text-center">
          Already have an account? <span className="cursor-pointer hover:underline">Log In</span>
        </Link>
        </div>
      </div>
  )
}

export default Register