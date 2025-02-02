import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { LiaReact } from "react-icons/lia";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div name="Home" className="max-w-screen-2xl  container mx-auto px-4 md:px-20  mt-20 md:mt-40">
      <div className="flex flex-col md:flex-row justify-between">
   <div className=" w-full md:w-1/2 flex flex-col">
   <div className=" mt-10 space-y-2 ">
        <h2 className="text-2xl font-medium ">Welcome in My Feed</h2>
        <h1 className="text-4xl font-semibold">Hello, I'm a <span> </span>  
        <ReactTyped
        className="text-red-700 font-bold"
          strings={[" FrontEnd Developer"]}
          typeSpeed={30}
          backSpeed={40}
          loop={true}
        />
          </h1>
        <p className="pt-6 text-justify">Hello, I'm Sushmita Gupta, a self-motivated IT-professional and a passionate Frontend developer with a keen eye for React Js . I strive to create impactful and visually stunning Software solutions that leave a lasting impression.
        I help business owners and busy web developers to design & develop creative websites that fits their vision and attracts the visitors to stay for ever.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-8 space-y-6 md:space-y-0">
        <div className="font-bold ">
          <p className="text-center">Available On</p>
          <ul className="flex justify-center md:justify-between mt-2 text-2xl gap-6">
        <li><a href="https://www.linkedin.com/in/sushmita-gupta-85bb8415a" target="_blank"><FaLinkedin /></a></li>
            <a href="https://www.facebook.com/" target="_blank"><li><FaFacebookSquare /></li></a>
           <a href="https://www.instagram.com/" target="_blank"> <li><FaInstagramSquare /></li></a>
           <a href="https://web.telegram.org/k/" target="_blank"> <li><FaTelegram /></li></a>
          </ul>
        </div>
        <div className="font-bold text-center">
          Currently Working On
        <ul className="flex justify-center md:justify-between mt-2 text-2xl">
            <li><IoLogoHtml5 title="Html"/></li>
            <li><IoLogoCss3 title="Css" /></li>
            <li><TbBrandJavascript title="Javascript" /></li>
            <li><LiaReact title="React Js"/></li>
          </ul>
        </div>
      </div>
   </div>
      <div>
        <img src="./images/mita.png" alt="" className="w-[400px] h-[400px] rounded-[50%] bg-slate-200 border-2 mt-8 md:mt-0" />
      </div>
      </div>
      <hr className="mt-24 w-[100%]"/>
    </div>
  )
}

export default Home