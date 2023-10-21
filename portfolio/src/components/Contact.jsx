function Contact() {
  return (
    <>
      <div className="bg-white p-8 md:p-14 rounded-xl shadow-2xl w-11/12 md:w-3/4 lg:w-1/3 border border-black">
        <form action="">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="example@gmail.com"
              className="shadow border rounded w-full py-2 px-3 focus:outline-none focus:border-gray-500"
            />

            <label
              htmlFor="content"
              className="text-gray-700 text-sm font-bold mb-2 mt-4"
            >
              Content
            </label>
            <textarea
              id="content"
              placeholder="Enter content here..."
              className="shadow border rounded w-full py-2 px-3 h-40 text-gray-700 focus:outline-none focus:border-gray-500 resize-none break-words"
            />

            <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded-3xl">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;

//needs setting up with formsubmit
