
const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen text-white">
      <hr className="my-9"></hr>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        
        <div className='pb-8'>
          
          <p className="text-4xl inline border-b-4 border-gray-500">Reach Out!</p>
          <p className="py-6">Send Message</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/bnlexlqb" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
            </input>

            <input type="text" name="email" placeholder="Enter your Email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
            </input>

            <textarea name="message" rows="10" placeholder="What do you want to tell me?"className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
            </textarea>
    
            <button className="my-9 rounded bg-neutral-900 text-xl px-2 py-1 font-medium text-purple-700 mx-auto flex items-center rounded-mdhover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
