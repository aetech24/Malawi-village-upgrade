import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Test from '../assets/tes-img1.jpg';
import ScrollToTop from '../components/ScrollToTop';
import Core_Values from '../components/Core_Values';
const About = () => {


  return (
    <>
      <main className="bg-white-100 px-4 max-md:mt-16 py-8 md:py-16 md:px-10">
      <h1 className="text-4xl font-bold mb-6 text-center mx-auto md:text-center py-10">About Us</h1>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16">
            
            {/* Text Section */}
            <div className="text-center md:text-left md:w-1/2 ">
            <h1 className="text-4xl font-bold mb-6 text-center mx-auto md:text-left">Vision</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The most trusted place for you and your family to break bread.
              </p>
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is to bridge the gap between sustainability and
                innovation. Join us in creating a better future—one step at a time.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2">
              <div className="relative overflow-hidden rounded-lg shadow-xl hover:scale-102 transform transition-all duration-500 ease-in-out">
                <img
                  src={Test}
                  alt="About Us"
                  className="w-full h-auto max-h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className='w-[80%] h-0.5 bg-gray-200 mx-auto text-center justify-center items-center'></div>
      <div>
        <Core_Values />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Gallery />
      </div>
      <ScrollToTop />
    </>
  );
};

export default About;