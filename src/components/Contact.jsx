

function Contact() {
  return (
    <div name="Contact" className="max-w-screen-2xl  container mx-auto px-4 md:px-20  mt-10 md:mt-20">
    <h1 className="text-3xl font-bold">Contact Me</h1>
    <p className="font-medium mt-3">Please fill out the form below to contact me.</p>
    <div className="bg-slate-300 rounded-lg w-[400px] mx-auto p-6 mt-6" >
      <h1 className="font-bold text-2xl pt-2 mb-4">Send Your Message</h1>
      <form action="https://getform.io/f/akkkokna" method="POST" className="flex flex-col gap-4">
   <div> <label htmlFor="name" className="font-medium" >Name</label><br />
   <input type="text" placeholder="Enter Your Name..." id="name" name="Name" required  className="w-[100%] p-2 outline-none shadow-lg rounded-md"/>
   </div>
    <div>
    <label htmlFor="email" className="font-medium">Email</label><br />
    <input type="email" placeholder="Enter Your Email Address..." required id="email" name="Email" className="w-[100%] p-2 outline-none shadow-lg rounded-md"/>
    </div>
    <div>
    <label htmlFor="mno" className="font-medium">Mobile No.</label><br />
    <input type="text" placeholder="Enter Your Mobile Number..." required maxLength={10} min={10} id="mno" name="Mobile No." className="w-[100%] p-2 outline-none shadow-lg rounded-md"/>
    </div>
    <div>
    <label htmlFor="msg" className="font-medium">Message</label><br />
    <textarea type="text" placeholder="Enter Your Query..." required id="msg" name="Query" className="w-[100%] p-2 outline-none shadow-lg rounded-md"/>
    </div>
    <button type="submit" className="bg-black text-white rounded-xl p-2 text-xl w-[25%]">SEND</button>
      </form>
    </div>
    <hr className="mt-20 w-[100%]"/>
  </div>
  )
}

export default Contact