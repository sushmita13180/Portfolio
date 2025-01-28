import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin, FaTelegram } from "react-icons/fa6"


function Footer() {
  return (
    <div name="Footer" className="max-w-screen-2xl  container mx-auto px-4 md:px-20  mt-5 md:mt-10">
      <div className="font-bold ">
                <ul className="flex justify-center mt-2 text-2xl gap-6">
                  <li><FaLinkedin /></li>
                  <li><FaFacebookSquare /></li>
                  <li><FaInstagramSquare /></li>
                  <li><FaTelegram /></li>
                </ul>
              </div>
      <div className="text-center text-gray-500 mt-4">
        <p>© 2025 Frontend Developer. All rights reserved.</p>
      <p> ❤️ Sushmita Gupta ❤️</p></div>
    </div>
  )
}

export default Footer