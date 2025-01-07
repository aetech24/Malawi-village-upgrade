import React from 'react'
import Test from '../assets/test1.jpg'
import Test1 from '../assets/test2.jpg'
import Test2 from '../assets/test3.jpg'
import Test3 from '../assets/test4.jpg'

const TestimonialCard = ({ text, name, role, imageUrl }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-black hover:scale-105 transform transition-all">
        <div className="p-4">
          <p className="text-gray-700 mb-4">{text}</p>
          <div className="flex items-center">
            <img
              src={imageUrl}
              alt="Customer"
              className="rounded-full w-10 h-10 mr-4"
            />
            <div>
              <h4 className="font-bold">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Testimonials =()=>{
    const testimonials = [
        {
          text: "I have been using Malawi products for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
          name: "Kristin Watson",
          role: "Satisfied Customer",
          imageUrl: Test,
        },
        {
          text: "Malawi products have changed the way I live my life. The quality is unmatched, and their support team is always there to help.",
          name: "Ronald Richards",
          role: "Happy Client",
          imageUrl: Test1,
        },
        {
          text: "Amazing experience! Highly recommend to everyone looking for quality and reliability.",
          name: "Jane Cooper",
          role: "Frequent Buyer",
          imageUrl: Test2,
        },
        {
          text: "I am so grateful for the amazing products and services offered by Malawi. They truly care about their customers.",
          name: "Cody Fisher",
          role: "Loyal Customer",
          imageUrl: Test3,
        },
      ]; 
      return(
         
        
      <section className="mt-16 bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center md:mb-4 mb-2">Testimonial</h2>
      <p className="text-center text-gray-600 mb-8">
        Hear what our customers say
      </p>
      <div className="max-w-7xl mx-5 md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" >
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
      )

  }
  export default Testimonials
   

