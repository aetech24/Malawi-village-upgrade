import ImageKristin from "../assets/test1.jpg";
import ImageRonald from "../assets/test2.jpg";
import ImageJane from "../assets/test3.jpg";
import ImageCody from "../assets/test4.jpg";
import PropTypes from "prop-types";

const TestimonialCard = ({ text, name, role, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-black hover:scale-105 transform transition-all duration-500 ease-in-out cursor-default flex flex-col h-full">
      {/* Testimony Text Section */}
      <div className="p-4 flex-grow overflow-auto">
        <p className="text-gray-700 mb-4">{text}</p>
      </div>

      {/* Person's Details Section (Fixed at Bottom) */}
      <div className="flex items-center h-16 border-t border-gray-300 p-4 bg-black">
        <img
          src={imageUrl}
          alt={`${name}'s picture`}
          className="rounded-full w-10 h-10 mr-4"
          loading="lazy"
          aria-label={`Picture of ${name}`}
        />
        <div>
          <h4 className="font-bold text-sm text-white">{name}</h4>
          <p className="text-sm text-gray-300">{role}</p>
        </div>
      </div>
    </div>
  );
};

// Adding Prop Types and Default Props
TestimonialCard.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

TestimonialCard.defaultProps = {
  text: "No feedback provided.",
  name: "Anonymous",
  role: "Customer",
  imageUrl: "",
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "I have been using Malawi products for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
      name: "Kristin Watson",
      role: "Satisfied Customer",
      imageUrl: ImageKristin,
    },
    {
      text: "Malawi products have changed the way I live my life. The quality is unmatched, and their support team is always there to help.",
      name: "Ronald Richards",
      role: "Happy Client",
      imageUrl: ImageRonald,
    },
    {
      text: "Amazing experience! Highly recommend to everyone looking for quality and reliability.",
      name: "Jane Cooper",
      role: "Frequent Buyer",
      imageUrl: ImageJane,
    },
    {
      text: "I am so grateful for the amazing products and services offered by Malawi. They truly care about their customers.",
      name: "Cody Fisher",
      role: "Loyal Customer",
      imageUrl: ImageCody,
    },
  ];

  return (
    <section className="mt-16 bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center md:mb-4 mb-2">
        Testimonials
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Hear what our customers say
      </p>
      <div className="max-w-7xl mx-5 md:mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.text}
            name={testimonial.name}
            role={testimonial.role}
            imageUrl={testimonial.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
