import Hero from '../assets/hero.jpg';
// import Banner from '../components/Banner';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { FaSearch } from "react-icons/fa";
import { products } from '../constants/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import RefreshingJuice from '../assets/Cat1.jpg';
import DetoxAndImmuneBooster from '../assets/Cat2.jpg';
import SweetAndUnsweetTea from '../assets/Cat3.jpg';
import Banner from '../assets/banner.jpg';
// import MalawiServices from '../assets/banner.jpg';
import Feature1 from '../assets/feature1.jpg';
import Feature2 from '../assets/feature2.jpg';
import Feature3 from '../assets/feature3.jpg';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  const Categories = [
    {
      name: 'Refreshments',
      image: RefreshingJuice,
    },
    {
      name: 'Detox and Immune Booster',
      image: DetoxAndImmuneBooster,
    },
    {
      name: 'Sweet and Unsweet Tea',
      image: SweetAndUnsweetTea,
    },
  ];


  return (
    <div>
      <div className='lg:h-[90vh] max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[80vh] flex items-center justify-center w-full relative'>
        <div
          className='absolute inset-0 w-full h-full'
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className='absolute max-md:mt-10 w-full flex flex-col justify-between items-center bottom-0 mb-[10%]'>
          {/* <h1 className='text-[10px] gap-0 md:text-[80px] text-white text-center w-[35%] tracking-0 '></h1> */}
          <div className='flex flex-col gap-0 items-center justify-center mt-20'>
            {/* <p className='text-yellow text-2xl'>Fresh Daily Juice</p> */}
            <div className='mt-10'>
              <Link to='/products'>
                <button className='bg-yellow text-black hover:bg-opacity-40 px-1  py-3 flex justify-center items-center w-[250px] rounded-[5px] '>
                  Explore The Juices
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='py-12 flex flex-col gap-6'>
        <div className='flex flex-col gap-5 px-4 md:px-10'>
          <h1 className='text-3xl font-medium mb-4 text-center'>Products</h1>
          <div className='flex items-center justify-between'>
            {/* <div className='relative'>
              <button
                className='absolute -left-10 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full z-10'
                onClick={scrollRight}
              >
                <FaArrowRight />
              </button>
              <button
                className='absolute right-12 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full z-10'
                onClick={scrollLeft}
              >
                <FaArrowLeft />
              </button>
            </div> */}
          </div>
          <div className='flex gap-6 md:justify-center justify-start mb-8 overflow-x-auto scroll-smooth scrollbar-auto'>
            <Link to='/products?category=Refreshments'>
              <div className='min-w-[200px] rounded-md cursor-pointer relative'>
                <img
                  src={Categories[0].image}
                  alt='Refreshments'
                  className='w-full object-cover '
                />
                <div className='w-full cursor-pointer bg-white hover:bg-opacity-30 duration-200 text-[#232323] p-2 text-center'>
                  Refreshments
                </div>
              </div>
            </Link>

            <Link to='/products?category=Detox and Immune Booster'>
              <div className='min-w-[200px] rounded-md cursor-pointer relative'>
                <img
                  src={Categories[1].image}
                  alt='DetoxAndImmuneBoosters'
                  className='w-full object-cover'
                />
                <div className='w-full cursor-pointer bg-white hover:bg-opacity-30 duration-200 text-[#232323] p-2 text-center'>
                  Detox and Immune Booster
                </div>
              </div>
            </Link>

            <Link to='/products?category=Sweet and Unsweet Tea'>
              <div className='min-w-[200px] rounded-md cursor-pointer relative'>
                <img
                  src={Categories[2].image}
                  alt='SweetAndUnsweetTea'
                  className='w-full object-cover'
                />
                <div className='w-full cursor-pointer bg-white hover:bg-opacity-30 duration-200 text-[#232323] p-2 text-center'>
                  Sweet and Unsweet Tea
                </div>
              </div>
            </Link>
          </div>
          <div className='w-full flex justify-center items-center mx-auto '>
            <Link to='/products'>
              <button className='bg-black text-white hover:bg-opacity-40 px-16 py-3 flex justify-center items-center w-fit'>
                Explore All Categories
              </button>
            </Link>
          </div>
          <div
            style={{
              height: '', 
              minHeight: '400px', 
              width: '100%',
              backgroundImage: `url(${Banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className="md:min-h-[600px] lg:min-h-[800px] h-auto lg:h-[800px]"
          >
            <div className='flex flex-col gap-4 md:gap-0 items-center h-full py-6 md:py-10'>
              {/* <div className='flex flex-col gap-2 md:gap-0 items-center'>
                <h4 className='text-white text-xl md:text-2xl lg:text-3xl'>Fresh Daily Juice</h4>
              </div> */}
              <div className='flex flex-col justify-end items-center mt-auto'>
                <Link to='/products'>
                  <button className='bg-yellow text-black hover:bg-opacity-40 px-4 md:px-6 py-2 md:py-3 flex justify-center items-center w-[200px] md:w-[250px] rounded-[5px] text-sm md:text-base md:mt-[90%]'>
                    Explore The Juices
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col justify-center items-center px-6 py-10'>
        <div className=''><h2 className='text-4xl font-[500] py-8'>Featured</h2></div>
        <div className='w-full flex lg:flex-row flex-col justify-center items-center gap-8'>
          <div className='flex flex-col lg:w-1/3 w-full h-full object-cover group hover:drop-shadow-2xl'>
            <img src={Feature1} alt="Malawi Services" className='w-full h-[200px] lg:h-[300px] md:h-[410px] object-cover group-hover:scale-105 duration-200'/>
            <div className='flex flex-col items-center justify-center gap-2 py-6 lg:py-10'>
              <h4 className='text-center text-xl lg:text-2xl'>Personalized Services</h4>
              <p className='text-center'>We offer personalized services to meet your needs</p>
            </div>
            <div className='flex justify-center items-center underline hover:text-yellow duration-200 text-xl lg:text-2xl py-6 lg:py-10'><Link to='/products'>Discover The Categories</Link></div>
          </div>
          <div className='flex flex-col lg:w-1/3 w-full h-full object-cover group hover:drop-shadow-2xl'>
            <img src={Feature2} alt="Malawi Services" className='w-full h-[200px] lg:h-[300px] md:h-[410px] object-cover group-hover:scale-105 duration-200'/>
            <div className='flex flex-col items-center justify-center gap-2 py-6 lg:py-10'>
              <h4 className='text-center text-xl lg:text-2xl'>Make an Order</h4>
              <p className='text-center'>We offer personalized services to meet your needs</p>
            </div>
            <div className='flex justify-center items-center underline hover:text-yellow duration-200 text-xl lg:text-2xl py-6 lg:py-10'><Link to='/products'>Order From Store</Link></div>
          </div>
          <div className='flex flex-col lg:w-1/3 w-full h-full object-cover group hover:drop-shadow-2xl'>
            <img src={Feature3} alt="Malawi Services" className='w-full h-[200px] lg:h-[300px] md:h-[410px] object-cover group-hover:scale-105 duration-200'/>
            <div className='flex flex-col items-center justify-center gap-2 py-6 lg:py-10'>
              <h4 className='text-center text-xl lg:text-2xl'>Collect Your Order</h4>
              <p className='text-center'>We offer personalized services to meet your needs</p>
            </div>
            <div className='flex justify-center items-center underline hover:text-yellow duration-200 text-xl lg:text-2xl py-6 lg:py-10'><Link to='/products'>Discover How</Link></div>
          </div>
        </div>
      </div>
        </div>
      </div>
      <hr className='mx-10' />
      <div className='flex flex-col gap-6 px-4 md:px-10 py-12'>
        <div className='flex items-center justify-between'>
          <h1 className='md:text-3xl text-2xl font-medium'>
            Explore Our Products
          </h1>
          <Link to='/menu' className='hover:underline'>
            See All
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
          {products.slice(0, 8).map((item, id) => (
            <ProductCard
              key={id}
              product={item}
              className='lg:min-w-[300px] lg:max-w-[300px] flex-shrink-0'
            />
          ))}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Home;
