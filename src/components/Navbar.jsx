import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setmenu] = useState(true);
  const navitem = [
   {
    id:1,
    text:'Home'
   },
   {
    id:2,
    text:'About'
   },
   {
    id:3,
    text:'Skills'
   },
   {
    id:4,
    text:'Contact'
   }
  ];
  return (
    <div className="max-w-screen-2xl  container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white"> 
    <div className="flex  justify-between items-center h-16">
    <div className="flex gap-4 items-center">
      <img src="./images/mita.png" className="w-12 h-12 rounded-[50%] bg-slate-200"/>   
      <h1 className="text-xl font-semibold cursor-pointer">
      <span>Sushmita Gupta</span>
      <p className=" text-red-700 font-semibold ">Frontend Developer</p>
      </h1>
    </div>
   
    {/* {desktop navbar} */}
    <div>
      <ul className="hidden md:flex gap-20 font-semibold ">
      {navitem.map(({id,text})=><li key={id} className="hover:scale-125 duration-300 ease-in-out hover:text-blue-800 cursor-pointer">
        <Link to={text}
        smooth={true}
        duration={500}
        offset={-70}
        activeClass="active">{text}</Link>
        </li>)}
      </ul>
      <div className="md:hidden" onClick={()=>setmenu(!menu)}>
         {menu ? <IoClose size={24} />  :  <IoMenu size={24}/>}
    </div>
    </div>
    </div>


    {/* {mobile navbar} */}
    {menu && <div className="bg-white">
      <ul className="md:hidden flex flex-col h-screen items-center justify-center gap-2 text-xl font-semibold">
      {navitem.map(({id,text})=><li key={id} className="hover:scale-125 duration-300 ease-in-out hover:text-blue-800 cursor-pointer">
      <Link
       onClick={()=>setmenu(!menu)}
       to={text}
        smooth={true}
        duration={500}
        offset={-70}
        activeClass="active">
          {text}
        </Link>
      </li>)}
      </ul>
    </div>}
    </div>
  )
}

export default Navbar