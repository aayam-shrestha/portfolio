import Title from "./Title";

const Contact = () => {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          className="flex flex-col width-full md:w-7/12"
          action="https://getform.io/f/4a6c79ba-98ff-4454-8566-9036cc141ab1"
          method="POST"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 border-2 bg-transparent rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-2 p-2 border-2 bg-transparent rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            rows={10}
            placeholder="Message"
            className="border-2 rounded-md bg-transparent focus:outline-none p-2 mb-4"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max font-medium rounded-md text-white bg-gradient-to-r from-lime-500 to-cyan-500 drop-shadow-md hover:stroke-white"
          >
            Connect With Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
