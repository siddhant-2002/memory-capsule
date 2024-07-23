import React from 'react'

export const Home = () => {
  return (
    <div className='h-full overflow-x-hidden overflow-scroll hide-scrollbar p-10'>
        {/* About Memory Capsule */}
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4">
            <img src="aboutus.png" alt="About Memory Capsule" className="rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold ">About Memory Capsule</h2>
            <p className="mt-2 ">Memory Capsule is a unique platform dedicated to preserving your most cherished memories. Whether it's photos, videos, or written stories, our service ensures that your memories are stored securely and can be revisited anytime, anywhere.</p>
          </div>
        </div>

        {/* Our Services */}
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
            <h2 className="text-2xl font-bold ">Our Services</h2>
            <p className="mt-2 t">We offer a variety of services to help you capture, preserve, and share your memories. From digital time capsules to personalized memory books, our platform is designed to cater to all your memory preservation needs.</p>
          </div>
          <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
            <img src="services.png" alt="Our Services" className="rounded-lg shadow-md" />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4">
            <img src="whychooseus.png" alt="Why Choose Us" className="rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold ">Why Choose Us</h2>
            <p className="mt-2 ">At Memory Capsule, we understand the importance of preserving memories. Our platform is built with the latest technology to ensure your memories are kept safe and secure. With our easy-to-use interface and dedicated support team, creating and accessing your memory capsules has never been easier.</p>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
            <h2 className="text-2xl font-bold ">Get In Touch</h2>
            <p className="mt-2 ">We're here to help you preserve your memories. If you have any questions, suggestions, or need assistance, please don't hesitate to reach out to us.</p>
            <ul className="list-disc pl-5 mt-2 ">
              <li>Email: support@memorycapsule.com</li>
              <li>Phone: +1 (234) 567-8901</li>
              <li>Address: 456 Memory Lane, Past Town, Historyland</li>
              <li>Social Media: Follow us on Instagram, Twitter, and Facebook</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
            <img src="getintouch.png" alt="Get In Touch" className="rounded-lg shadow-md" />
          </div>
        </div>
    </div>
  )
}
