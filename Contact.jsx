const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //const formData = new FormData(e.target);

    // Simulating form submission (replace this with your actual logic)
    // Send formData to your backend for email processing

    // For demonstration purposes, show an alert on successful form submission
    alert("Message sent to Arya successfully!"); // Replace this with your own logic for email submission

    // Reset the form after submission
    e.target.reset();
  };

  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
              className="w-full border border-gray-300 rounded-md py-2 px-3"
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
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 text-xl text-white font-bold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
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
      </div>
    </div>
  );
};

export default Contact;
