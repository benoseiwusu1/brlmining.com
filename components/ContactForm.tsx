import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-20">
        <h2 className="text-4xl uppercase mb-4 text-center">Contact us</h2>
        <p className="text-center mb-16">
          For all questions, please use the form below.
        </p>
        <form className="space-y-4 md:px-20">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-base font-medium mb-1 uppercase text-gray-800"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full bg-gray-200 focus:border-0 focus:ring-none focus:none p-3"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-base font-medium mb-1 uppercase text-gray-800"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full bg-gray-200 focus:border-0 focus:ring-none focus:none p-3"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="email"
                className="block text-base font-medium mb-1 uppercase text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-200 focus:border-0 focus:ring-none focus:none p-3"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-base font-medium mb-1 uppercase text-gray-800"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-gray-200 focus:border-0 focus:ring-none focus:none p-3"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-base font-medium mb-1 uppercase text-gray-800"
              htmlFor="message"
            >
              What can we help you with?
            </label>
            <textarea
              id="message"
              placeholder="Your message..."
              className="w-full bg-gray-200 focus:border-0 focus:ring-none focus:none p-3"
              required
              rows={10}
            ></textarea>
          </div>

          <div className="mx-auto text-center">
            <button
              type="submit"
              className="w-max bg-primary text-white font-bold py-2 px-4 focus:ring focus:ring-blue-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
