// Passion
import { FaHeart } from 'react-icons/fa'; // Heart icon to represent passion and commitment in hearts and mind.

// Integrity
import { FaBalanceScale } from 'react-icons/fa'; // Scale icon for respect, honesty, and transparency.

// Quality
import { MdVerified } from 'react-icons/md'; // Verified icon to reflect excellence in everything.

// Leadership
import { GiTorch } from 'react-icons/gi'; // Torch icon to symbolize forging a promising future.

// Customer Service
import { FaHandHoldingHeart } from 'react-icons/fa'; // Hand with heart icon to reflect care and service to customers.

// Accountability
import { AiOutlineCheckCircle } from 'react-icons/ai'; // Check circle icon to represent accountability and delivering results.

// Cleanliness
import { FaSoap } from 'react-icons/fa'; // Soap icon to symbolize cleanliness and purity.

// const core_values = [
//   {
//     id:1
//     title:'Passion'
//     icon: 
//   }
// ]

const Core_Values = () => {  return (
    <div className="flex flex-col justify-between items-center gap-2 mx-10">
      <div>
        <h1 className="flex justify-center items-center text-4xl my-10 font-semibold">Core Values</h1>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 my-10'>
      <div className='flex flex-col lg:w-[300px] lg:h-[200px] w-full h-[150px] bg-white drop-shadow-lg p-5'>
          <div className="lg:w-[80px] lg:h-[80px] w-[30px] h-[30px]float-start my-2 border border-yellow flex items-center justify-center p-1 rounded-[50%]"><FaHeart/></div>
          <div className='flex flex-col col-span-1 text-start'>
            <h2 className="text-2xl text-start font-bold">Passion</h2>
            <p>Committed in hearts and mind. </p>
           </div>
        </div>
        <div className='flex flex-col lg:w-[300px] lg:h-[200px] w-full h-[150px] bg-white drop-shadow-lg p-5'>
          <div className="lg:w-[80px] lg:h-[80px] w-[30px] h-[30px] float-start my-2 border border-yellow  flex items-center justify-center p-1 rounded-[25px]"><FaBalanceScale/></div>
          <div className='flex flex-col col-span-1 text-start'>
            <h2 className="text-2xl text-start font-bold">Integrity</h2>
            <p>We believe in respect, honesty and transparency.</p>
           </div>
        </div>
        <div className='flex flex-col lg:w-[300px] lg:h-[200px] w-full h-[150px] bg-white drop-shadow-lg p-5'>
          <div className="lg:w-[80px] lg:h-[80px] w-[30px] h-[30px] float-start my-2 border border-yellow  flex items-center justify-center p-1 rounded-[25px]"><MdVerified/></div>
          <div className='flex flex-col col-span-1 text-start'>
            <h2 className="text-2xl text-start font-bold">Quality</h2>
            <p>We perform with excellence in everything we do.</p>
           </div>
        </div>
        <div className='flex flex-col lg:w-[300px] lg:h-[200px] w-full h-[150px] bg-white drop-shadow-lg p-5'>
          <div className="lg:w-[80px] lg:h-[80px] w-[30px] h-[30px] float-start my-2 border border-yellow  flex items-center justify-center p-1 rounded-[25px]"><GiTorch/></div>
          <div className='flex flex-col col-span-1 text-start'>
            <h2 className="text-2xl text-start font-bold">Leadership</h2>
            <p>The strength to forge a more promising future</p>
           </div>
        </div>
        <div className='flex flex-col lg:w-[300px] lg:h-[200px] w-full h-[150px] bg-white drop-shadow-lg p-5'>
          <div className="lg:w-[80px] lg:h-[80px] w-[30px] h-[30px] float-start my-2 border border-yellow  flex items-center justify-center p-1 rounded-[25px]"><FaHandHoldingHeart/></div>
          <div className='flex flex-col col-span-1 text-start'>
            <h2 className="text-2xl text-start font-bold">Customer Service</h2>
            <p>We understand you are not only a blessing but a gift directly from God</p>
           </div>
        </div>
        <div className='flex flex-col lg:w-[300px] lg:h-[200px] w-full h-[150px] bg-white drop-shadow-lg p-5'>
          <div className="lg:w-[80px] lg:h-[80px] w-[30px] h-[30px] float-start my-2 border border-yellow  flex items-center justify-center p-1 rounded-[25px]"><AiOutlineCheckCircle/></div>
          <div className='flex flex-col col-span-1 text-start'>
            <h2 className="text-2xl text-start font-bold">Accountability</h2>
            <p>Delivering our very best in all we do, holding ourselves accountable for results.</p>
           </div>
        </div>
        <div className='flex flex-col lg:w-[300px] lg:h-[200px] w-full h-[150px] bg-white drop-shadow-lg p-5'>
          <div className="lg:w-[80px] lg:h-[80px] w-[30px] h-[30px] float-start my-2 border border-yellow  flex items-center justify-center p-1 rounded-[25px]"><FaSoap/></div>
          <div className='flex flex-col col-span-1 text-start'>
            <h2 className="text-2xl text-start font-bold">Cleanliness</h2>
            <p>It is almost as important to be clean as it is to God to be good.</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Core_Values