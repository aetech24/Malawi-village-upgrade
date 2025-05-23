import { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    orderNumber: "",
    question: "",
    comments: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  window.scrollTo(0, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission logic (e.g., API call)
    console.log("Form submitted:", formData);

    // Reset form data to initial state
    setFormData(initialFormState);

    // Provide user feedback (optional)
    alert("Your details have been submitted successfully!");
  };

  return (
    <main className="p-8 min-h-screen bg-gray-100 md:mt-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="my-6">
          <h1 className="text-4xl font-bold text-start my-3">EMAIL</h1>
          <p className="md:text-2xl lg:text-1xl text-xl my-1">
            Your inquiry will receive a response from a Client Advisor.
          </p>
          <a
            className="md:text-2xl lg:text-1xl text-xl my-1 underline text-yellow"
            href="mailto:info@malawivillage.com"
          >
            info@malawivillage.com
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number*
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="orderNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Order Number*
            </label>
            <input
              type="text"
              id="orderNumber"
              name="orderNumber"
              required
              value={formData.orderNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="question"
              className="block text-sm font-medium text-gray-700"
            >
              My question is about...
            </label>
            <input
              type="text"
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="comments"
              className="block text-sm font-medium text-gray-700"
            >
              Comments*
            </label>
            <textarea
              id="comments"
              name="comments"
              rows="4"
              required
              value={formData.comments}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ScrollToTop />
    </main>
  );
};

export default Contact;
