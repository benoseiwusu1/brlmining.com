import React from "react";

const ContactDetails: React.FC = () => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-center md:items-center mb-8">
      {/* Left Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0 h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d430.5729139967408!2d-0.14494827738223284!3d5.637106408538737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1736755559487!5m2!1sen!2sgh"
          width="100%"
          height="100%"
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
          allowFullScreen={false}
        ></iframe>
      </div>

      {/* Right Contact Details */}
      <div className="w-full md:w-1/2 p-12">
        <h2 className=" text-2xl md:text-5xl text-dark uppercase">
          Want to get in touch?
        </h2>
        <p className="text-2xl font-meduim text-black mb-6 mt-3">
          Our customer support team is here for you
        </p>
        <p className="text-gray-600 mb-6">
          <span className="font-bold text-xl text-black">
            Registered Office
          </span>
          <br />
          <div className="">
            <p className="text-black">4 Apple Avenue</p>
            <p className="text-black">East Legon</p>
            <p className="text-black">Accra, GA 372 – 7679</p>
          </div>
        </p>
        <p className="text-gray-600 mb-6">
          <span className="font-bold text-xl text-black">Phone</span> <br />
          <a href="tel:8884441212" className="text-black mt-3">
            +233 30 254 3667
          </a>
        </p>
        <p className="text-gray-600 mb-6">
          <span className="font-bold text-xl text-black">Email:</span> <br />
          <a
            href="mailto:Caesarkofi@caesarfurnacegh.com"
            className="text-black mt-3"
          >
            info@brlmining.com
          </a>
        </p>
        <p className="text-gray-600 mb-6">
          <span className="font-bold text-xl text-black">Postal Address</span>
          <br />
          <p className="text-black">PO Box CT 6033</p>
          <p className="text-black">Cantonments, Accra</p>
          <p className="text-black">Ghana</p>
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
