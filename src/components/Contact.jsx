
const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen text-white">
      <hr className="my-9"></hr>
      
      <h1 className="text-center">
            <button
                className="bg-gradient-to-r from-purple-300 via-slate-400
                         to-blue-600 bg-clip-text text-4xl tracking-tight mr-7 my-10 
                         bg-neutral-500 px-8 py-2 font-medium
                         text-transparent transition duration-300
                        rounded-3xl border-8 border-neutral-300 animate-float3"
                
                         
                onClick={() => window.open('/Snapshots.Me/Ajun Jo Resume.pdf', '_blank')}
                >
                View Resume
            </button>
      </h1>

      <div className="my-3 p-4 justify-center max-w-screen-lg mx-auto h-full">
        
        <div className='pb-8'>
          
          <p className="text-4xl inline border-b-4 border-gray-500">Reach Out!</p>
          <p className="py-6">Phone # : 905 651 5768</p>
          <p>Email : joajune03@gmail.com</p>
          
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/bnlexlqb" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
            </input>

            <input type="text" name="email" placeholder="Enter your Email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
            </input>

            <textarea name="message" rows="10" placeholder="Write your message"className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
            </textarea>
    
            <button className="my-9 rounded-2xl  bg-neutral-900 text-xl px-7 py-2 font-medium text-purple-700 mx-auto flex items-center rounded-mdhover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
