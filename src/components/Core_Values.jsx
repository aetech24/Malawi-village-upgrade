import {
  FaHeart,
  FaBalanceScale,
  FaHandHoldingHeart,
  FaSoap,
  FaHandshake,
} from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiTorch } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

const core_values = [
   {
    id: 8,
    title: "Our Promise",
    icon: <FaHandshake className="w-12 h-12" />,
    paragraph: "Sourced with Integrity, freshly handcrafted.",
  },
  {
    id: 1,
    title: "Passion",
    icon: <FaHeart className="w-12 h-12" />,
    paragraph: "Committed in hearts and mind.",
  },
  {
    id: 2,
    title: "Integrity",
    icon: <FaBalanceScale className="w-12 h-12" />,
    paragraph: "We believe in respect, honesty and transparency.",
  },
  {
    id: 3,
    title: "Quality",
    icon: <MdVerified className="w-12 h-12" />,
    paragraph: "We perform with excellence in everything we do.",
  },
  {
    id: 4,
    title: "Leadership",
    icon: <GiTorch className="w-12 h-12" />,
    paragraph: "The strength to forge a more promising future.",
  },
  {
    id: 5,
    title: "Customer Service",
    icon: <FaHandHoldingHeart className="w-12 h-12" />,
    paragraph:
      "We understand you are not only a blessing but a gift directly from God.",
  },
  {
    id: 6,
    title: "Accountability",
    icon: <AiOutlineCheckCircle className="w-12 h-12" />,
    paragraph:
      "Delivering our very best in all we do, holding ourselves accountable for results.",
  },
  {
    id: 7,
    title: "Cleanliness",
    icon: <FaSoap className="w-12 h-12" />,
    paragraph:
      `We are committed to the highest standards of cleanliness
      and hygiene at every stage of our process. From sourcing the freshest
      ingredients to bottling our juice, we ensure a spotless, safe and pure
      environment. Every ship you take is a reflection of our dedication to
      quality, freshness and your well-being.
      `,
  },
 
];

const Core_Values = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-6 mx-10">
      {/* Header */}
      <div>
        <h1 className="flex justify-center items-center text-4xl my-10 font-semibold">
          Core Values
        </h1>
      </div>

      {/* Core Values Grid */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 my-10">
        {core_values.map((core_value) => (
          <div
            key={core_value.id}
            className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg"
          >
            {/* Icon with Border */}
            <div className="w-20 h-20 border-yellow border-[2px] flex items-center justify-center p-2 rounded-full mb-4">
              {core_value.icon}
            </div>

            {/* Title and Description */}
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">{core_value.title}</h2>
              <p className="text-sm text-gray-700">{core_value.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Core_Values;
