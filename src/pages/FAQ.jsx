import React, { useState } from "react";
import Faq from "../assets/Zobo-hero-img.jpg"

const faqs = [
  {
    category: "Returns & Refunds",
    questions: [
      {
        question: "Can I return the product I ordered?",
        answer: `- Due to the perishable nature of our products we are unable to accept returns.`
      },
      {
        question: "Refund and Cancellation Policy",
        answer: `- At Malawi Village®, we are committed to providing our guests with the highest quality,
                   best tasting product. If you are not 100% satisfied with your shipment, we want to know.
                   We pride ourselves in our consistency and freshness of product, although we try to be
                   perfect, sometimes mistakes may happen. Our return policy is simple, provide us with a
                   picture of the shipment you received, if there are missing juices, the shipment is damaged
                   or you received the wrong order we will need documentation in order to process to
                   schedule another reshipment. If it is in fact a Malawi Village® error, we will gladly
                   replace the product at no cost to you. Please note, all exchange requests will need to be
                   submitted to Client Advisor within 2 days after the shipment was received.`
      },
      {
        question: "Freshness Guarantee",
        answer: `- If you are not satisfied with the taste of the juices purchased, you will need to contact
                   Client Advisor within 2 days of receiving the shipment with detailed information on why
                   you were not satisfied with our product. Depending on the feedback received, we may not
                   be able to provide a full refund.`
      },
      {
        question: "Cancellations",
        answer: `- Cancellation requests for shipment orders placed need to be submitted to Guest Services
                   right away. A 24 hour notice is in place for all E Commerce shipments to give ample time
                   to communicate the change with our warehouses. If the cancellation is outside of the 24
                   hour window, Guest Services may not be able to guarantee the cancellation or issue a full
                   refund.`
      }
    ]
  },
  {
    category: "Ordering & Payments",
    questions: [
      {
        question: "Can I pick up my order?",
        answer: `- At this time we are not offering local pickup. We apologize for any inconvenience this
                   may cause.`
      },
      {
        question: "Can I find your juices in stores?",
        answer: `- At this time we are only selling online through our website.`
      },
      {
        question: "Why are some products showing unavailable?",
        answer: `- Products that are unavailable are due to them being seasonal and availability of those
                   product are affected. If ordering for pickup, you are able to call the store location and
                   view their inventory to see if they have the desired items in stock at a nearby location.`
      },
      {
        question: "Why does it show that a product is stocked out?",
        answer: `- Due to our commitment to crafting fresh menu items with seasonal produce, some items
                   may occasionally be unavailable. We apologize for any inconvenience caused by
                   temporary supply shortages affecting some of the products you've ordered. Not to worry,
                   the item is not discontinued, it will be back online once the item is back in stock at our
                   warehouse! In the meantime, you can place a backorder to receive the product as soon as
                   it becomes available.`
      },
  
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        question: "How long does delivery take?",
        answer: `- Generally, shipping takes 1-3 business days. However, this does not take into account
                   time to process the order, and where you live in the country might affect the delivery
                   time. We are based in Dallas, TX and we process orders first come, first serve. All orders
                   are shipped Monday - Friday. If you order later in the week and there are not enough days
                   in transit to allow for the package to arrive by Friday (commercial address) or Saturday
                   (home delivery), your order will be held for shipment until the following week.`
      },
      {
        question: "Do you offer same-day delivery?",
        answer: `- At this time we do not offer same day delivery. We do our best to get every order out as
                   quickly as possible. Once your order is processed for shipment you will receive an email
                   including your tracking number.`
      },
      {
        question: "Will I be notified when my order ships?",
        answer: `- Once your order is processed for delivery you will receive a confirmation email with the
                    tracking number.`
      },
      {
        question: "Do you ship internationally?",
        answer: `- At this time we ship to the United States, including Hawaii and Alaska.`
      },
      {
        question: "Are there any shipping restrictions?",
        answer: `- We cannot deliver on Sundays or Mondays or to P.O. Boxes or A.P.O. and F.P.O.
                   addresses.`
      },
      {
        question: "Do I need to be home to receive my order?",
        answer: `- Each package is shipped in an insulated box and will withstand sitting until you return
                   home. Due to the perishable nature of our products, we ask that you open the package
                   immediately upon arrival and to place the contents in your freezer or refrigerator. If you
                   are ordering as a gift, do not worry<br>
                   - all of our packages are marked "keep frozen" and
                   "perishable". In addition, each package contains a brochure with instructions for proper
                   handling.`
      },
      {
        question: "How much bottle can I ship?",
        answer: `
                  - Here are the minimum we can ship per order per bottle size they should not be able to add
                   anything less than this.<br>
                   <b>Tea</b> – 13 minimum.<br>
                   <b>Big bottle juice</b> – 6 minimum<br>
                   <b>Small bottle</b> - 8 minimum

                 `
      },
    ]
  },
  {
    category: "Prices for product",
    questions: [
      {
        question: "Tea",
        answer: "$9"
      },
      {
        question: "Juice 8oz",
        answer: "$8"
      },
      {
        question: "Juice 16oz",
        answer: "$12"
      }
      
    ]
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[700px] flex items-center justify-start px-8">
        <div className="absolute inset-0 bg-cover bg-center " 
             style={{ backgroundImage: `url(${Faq})` }}></div>
        <div className="relative text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold">FAQ’s</h1>
          <p className="text-lg md:text-xl mt-2">Most frequently asked questions</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-10 px-4 md:px-20">
        {faqs.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-4xl font-bold mb-4 text-center">{section.category}</h2>
            {section.questions.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-300">
                <button
                  className="flex justify-between items-center w-full py-4 text-lg font-medium text-gray-900 focus:outline-none"
                  onClick={() => toggleFAQ(`${index}-${idx}`)}
                >
                  {faq.question}
                  <span className="text-xl">{openIndex === `${index}-${idx}` ? "−" : "+"}</span>
                </button>
                {openIndex === `${index}-${idx}` && (
                  <p className="text-gray-600 pb-4" dangerouslySetInnerHTML={{ __html: faq.answer}}></p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
