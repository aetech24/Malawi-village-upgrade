import React from 'react'

const FAQ = () => {
  return (
      <div className=' min-h-screen  mx-auto md: p-10 lg: p-12'>
          <h1 className='text-5xl font-bold text-center mb-4 underline sm: text-6xl'> FAQ </h1>

          {/* Returns & Refunds Section */}
          <h2 className="text-xl text-center font-bold mb-4 sm:text-2xl">
           Returns & Refunds
          </h2>
          <h3 className=' text-lg font-semibold mb-4 sm:text-xl'>Can I return the product I ordered? </h3>
          <p className='mb-4 text-sm sm:text-base'> - Due to the perishable nature of our products we are unable to accept returns.</p>

          <h3 className='text-lg font-semibold mt-4 sm:text-xl'>Refund and Cancellation Policy: </h3>
          <p className='mb-4 text-sm sm:text-base mt-2'>- At <strong>Malawi Village®</strong>, we are committed to providing our guests with the highest quality, best tasting product. If you are not 100% satisfied with your shipment, we want to know.
           We pride ourselves in our consistency and freshness of product, although we try to be perfect, sometimes mistakes may happen. Our return policy is simple, provide us with a picture of the shipment you received,
           if there are missing juices, the shipment is damaged or you received the wrong order we will need documentation in order to process to schedule another reshipment.
              If it is in fact a Malawi Village® error, we will gladly replace the product at no cost to you. Please note, all exchange requests will need to be submitted to Client Advisor within 2 days after the shipment was received.
          </p>
          
          <h3 className="text-lg font-semibold sm:text-xl">Freshness Guarantee:</h3>
          <p className='mb-4 text-sm sm:text-base mt-2'>- If you are not satisfied with the taste of the juices purchased, you will need to contact
           Client Advisor within 2 days of receiving the shipment with detailed information on why
           you were not satisfied with our product. Depending on the feedback received, we may not
              be able to provide a full refund.</p>
          
          <h3 className='text-lg font-semibold sm:text-xl'>Cancellations:</h3>
          <p className='mb-4 text-sm sm:text-base mt-2'>- Cancellation requests for shipment orders placed need to be submitted to Guest Services
           right away. A 24 hour notice is in place for all E Commerce shipments to give ample time
           to communicate the change with our warehouses. If the cancellation is outside of the 24
           hour window, Guest Services may not be able to guarantee the cancellation or issue a full refund.
          </p>

          {/* Ordering & Payments */}

          <h2 className=" text-xl text-center font-bold sm:text-2xl">
           Ordering & Payments
          </h2>
          <h3 className=' text-lg font-semibold mb-4 sm:text-xl'> Can I pick up my order? </h3>
          <p className='mb-4 text-sm sm:text-base'> - At this time we are not offering local pickup. We apologize for any inconvenience this
              may cause.
          </p>
          <h3 className=' text-lg font-semibold mb-4 sm:text-xl'> Can I find your juices in stores? </h3>
          <p className='mb-4 text-sm sm:text-base'>
              - At this time we are only selling online through our website and Amazon.
          </p>
          <h3 className=' text-lg font-semibold mb-4 sm:text-xl'> Why are some product showing unavailable? </h3>
          <p className='mb-4 text-sm sm:text-base'>
              - Products that are unavailable are due to them being seasonal and availability of those
                product are affected. If ordering for pickup, you are able to call the store location and
                view their inventory to see if they have the desired items in stock at a nearby location..
          </p>
          <h3 className=' text-lg font-semibold mb-4 sm:text-xl'> Why does it show that a product is stocked out?</h3>
          <p className='mb-4 text-sm sm:text-base'>
              - Due to our commitment to crafting fresh menu items with seasonal produce, some items
                may occasionally be unavailable. We apologize for any inconvenience caused by
                temporary supply shortages affecting some of the products you&#39;ve ordered. Not to worry,
                the item is not discontinued, it will be back online once the item is back in stock at our
                warehouse! In the meantime, you can place a backorder to receive the product as soon as
                it becomes available.
          </p>

          {/* Shipping &amp; Delivery */}
          <h2 className=" text-xl text-center font-bold sm:text-2xl">
           Shipping & Delivery
          </h2>
          <h3 className=' text-lg font-semibold mb-4 sm:text-xl'> How long does delivery take? </h3>
          <p className='mb-4 text-sm sm:text-base'>
            -  Generally, shipping takes 1-3 business days. However, this does not take into account
               time to process the order, and where you live in the country might affect the delivery
               time. We are based in Dallas, TX and we process orders first come, first serve. All orders
               are shipped Monday - Friday. If you order later in the week and there are not enough days
               in transit to allow for the package to arrive by Friday (commercial address) or Saturday
               (home delivery), your order will be held for shipment until the following week.
          </p>

          <h3 className=' text-lg font-semibold mb-4 sm:text-xl'> Do you offer same day delivery? </h3>
          <p className='mb-4 text-sm sm:text-base'>
            -  At this time we do not offer same day delivery. We do our best to get every order out as
               quickly as possible. Once your order is processed for shipment you will receive an email
               including your tracking number.
          </p>

          <h3 className=' text-lg font-semibold mb-4 sm:text-xl'> Will I be notified when my order ships? </h3>
          <p className='mb-4 text-sm sm:text-base'>
            -  Once your order is processed for delivery you will receive a confirmation email with the
               tracking number.
          </p>

          <h3 className=' text-lg font-semibold mb-4 sm:text-xl'> Do you ship internationally? </h3>
          <p className='mb-4 text-sm sm:text-base'>
            -  At this time we ship to the United States, including Hawaii and Alaska.
          </p>

          <h3 className=' text-lg font-semibold mb-4 sm:text-xl'> Are there any shipping restrictions? </h3>
          <p className='mb-4 text-sm sm:text-base'>
            -  We cannot deliver on Sundays or Mondays or to P.O. Boxes or A.P.O. and F.P.O.
               addresses.
          </p>

          <h3 className=' text-lg font-semibold mb-4 sm:text-xl'> Do I need to be home to receive my order? </h3>
          <p className='mb-4 text-sm sm:text-base'>
            -  Each package is shipped in an insulated box and will withstand sitting until you return
               home. Due to the perishable nature of our products, we ask that you open the package
               immediately upon arrival and to place the contents in your freezer or refrigerator. If you
               are ordering as a gift, do not worry - all of our packages are marked &quot;keep frozen&quot; and
               &quot;perishable&quot;. In addition, each package contains a brochure with instructions for proper
               handling.
          </p>
    </div>
  )
}

export default FAQ;