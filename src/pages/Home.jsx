import React from 'react'
import { IoSearch } from "react-icons/io5";
import Hero from '../assets/home-hero.png'

const Home = () => {
  return (
    <div>
        <div className="lg:h-[90vh] max-[340px]:h-[90vh] max-sm:h-[75vh] md:h-[60vh] flex items-center justify-center w-full">
            <img src={Hero} className="bg-cover bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className="absolute max-[340px]:mt-10 w-full flex flex-col gap-6 justify-center items-center">
                <div className='w-full px-52'>
                    <input type="text" className='w-full p-3 bg-opacity-60 rounded-full bg-white placeholder:text-gray-800 px-6' placeholder='Search your favorite juice'/>
                </div>
                <div className='flex flex-col gap-0 items-center'>
                    <h1 className='text-[80px] text-white'>Malawi Village</h1>
                    <p className='text-yellow text-2xl'>Every Sip Feels Like Spring</p>
                </div>
            </div>
        </div>
        <div className='py-12'>
            <div className='flex items-center gap-2 px-10'>
                <div className='h-10 w-4 rounded-md bg-black'></div>
                <p className='text-xl font-semibold'>Today</p>
            </div>
            <h1>Flash Sales</h1>
        </div>
    </div>
  );
};

export default Home