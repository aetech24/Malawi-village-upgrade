import { useState } from 'react';
import Hero from '../assets/login-hero.png';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { useAuth } from "../components/AuthContext";
import ScrollToTop from '../components/ScrollToTop';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (event) => {
    event.preventDefault();

    // Input validation
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Retrieve user details from localStorage
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (storedUserDetails) {
      const { email: storedEmail, password: storedPassword, name } = storedUserDetails;

      // Validate credentials
      if (storedEmail === email.trim().toLowerCase() && storedPassword === password) {
        const userDetails = { name };
        login(userDetails);
        navigate('/'); // Redirect to home
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("No user found. Please sign up first.");
    }
  };

  return (
    <div className="flex lg:grid lg:grid-cols-2 items-center gap-4 md:mt-6">
      <div className="w-full h-full hidden lg:flex relative">
        <img src={Hero} alt="" className="w-full bg-cover h-full" />
      </div>
      <div className="flex items-center max-lg:border max-lg:rounded-2xl max-[340px]:mx-2 max-sm:m-8 max-lg:m-36 max-lg:py-16 max-sm:py-4 max-lg:shadow-lg max-sm:mt-24 w-full justify-center flex-col gap-2 md:gap-10">
        <form
          onSubmit={handleLogin}
          className="flex flex-col md:gap-10 gap-4 px-4 w-full md:px-20"
        >
          <img src={Logo} alt="" className="w-[120px] flex justify-center mx-auto" />
          <div className="flex flex-col gap-3">
            <label className="flex flex-col gap-3">
              Email*
              <input
                type="email"
                name="userEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                className="text-lg md:text-xl outline-none border-b w-full bg-gray-100 p-3"
              />
            </label>
          </div>
          <div className="flex flex-col w-full">
            <label className="flex flex-col gap-3">
              Password*
              <input
                type="password"
                name="userPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="text-lg md:text-xl outline-none border-b w-full bg-gray-100 p-3"
              />
            </label>
          </div>
          <div className="text-white max-sm:mt-2 max-sm:text-sm flex flex-col w-full gap-2">
            <button
              type="submit"
              className="bg-black w-full px-2 py-1 md:px-4 md:py-2 text-lg rounded-md font-semibold text-white transition duration-300 ease-in"
            >
              Log In
            </button>
            <p className="text-black text-sm font-semibold text-right cursor-pointer">
              Forgot Password?
            </p>
          </div>
        </form>
        <Link to="/register" className="text-black text-sm font-medium text-center">
          Do not have an account? <span className="cursor-pointer hover:underline">Sign Up</span>
        </Link>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Login;