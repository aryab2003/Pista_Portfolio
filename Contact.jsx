import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Check for a redirect or returning to the previous page
    const urlParams = new URLSearchParams(window.location.search);
    const successParam = urlParams.get("success");

    if (successParam === "true") {
      // Show the toast notification
      toast.success("Arya will look into it!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, // Auto close after 3 seconds
      });
    }
  }, []);

  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Contact Me
        </h1>
        <form
          action="https://getform.io/f/f23ee7da-390b-4a5f-b9d9-4dfb4a5c0603"
          method="POST"
          encType="multipart/form-data"
          className="max-w-md mx-auto"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-xl text-white font-bold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-black"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-xl text-white font-bold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-black"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 text-xl text-white font-bold "
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-black"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
