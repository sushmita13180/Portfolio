

function Skills() {
  return (
    <div name="Skills" className="max-w-screen-2xl  container mx-auto px-4 md:px-20  mt-10 md:mt-20">
    <h1 className="text-3xl font-bold">Skills</h1>
    <p className="font-medium mt-3 text-justify">I've more than 3 years of experiance in below technologies.</p>
    <div className="flex gap-8 mt-6 flex-wrap justify-center md:justify-normal">
    <div className="flex flex-col items-center justify-center border-2 shadow-md  min-w-[180px] h-[220px] md:min-w-[200px] rounded-[50%] hover:scale-110 duration-200 ease-in-out cursor-pointer">
      <img src="./images/html.png" alt=""  className="w-[90px]"/>
      <p className="font-medium">HTML5</p>
      </div>
    <div className="flex flex-col items-center justify-center border-2 shadow-md min-w-[180px] h-[220px] md:min-w-[200px] rounded-[50%] hover:scale-110 duration-200 ease-in-out cursor-pointer">
      <img src="./images/css.png" alt=""  className="w-[90px]"/>
      <p className="font-medium">CSS3</p>
      </div>
    <div className="flex flex-col items-center justify-center border-2 shadow-md min-w-[180px] h-[220px] md:min-w-[200px] rounded-[50%] p-3 hover:scale-110 duration-200 ease-in-out cursor-pointer">
      <img src="./images/js.png" alt=""  className="w-[90px]"/>
      <p className="font-medium">Javascript</p>
      </div>
    <div className="flex flex-col items-center justify-center border-2 shadow-md min-w-[180px] h-[220px] md:min-w-[200px] p-6 rounded-[50%] hover:scale-110 duration-200 ease-in-out cursor-pointer">
      <img src="./images/bootstrap.jpg"  alt=""  className="w-[90px] "/>
      <p className="font-medium">Bootstrap</p>
      </div>
    <div className="flex flex-col items-center justify-center border-2 shadow-md min-w-[180px] h-[220px] md:min-w-[200px] rounded-[50%] hover:scale-110 duration-200 ease-in-out cursor-pointer">
      <img src="./images/tailwind.png" alt=""  className="w-[90px]"/>
      <p className="font-medium">Tailwind</p>
      </div>
    <div className="flex flex-col items-center justify-center border-2 shadow-md min-w-[180px] h-[220px] md:min-w-[200px] p-6 rounded-[50%] hover:scale-110 duration-200 ease-in-out cursor-pointer">
      <img src="./images/react.png" alt=""  className="w-[90px]"/>
      <p className="font-medium">React</p>
      </div>
    <div className="flex flex-col items-center justify-center border-2 shadow-md min-w-[180px] h-[220px] md:min-w-[200px] rounded-[50%] hover:scale-110 duration-200 ease-in-out cursor-pointer">
      <img src="./images/redux.png" alt=""  className="w-[80px]"/>
      <p className="font-medium">Redux-Toolkit</p>
      </div>
    <div className="flex flex-col items-center justify-center border-2 shadow-md min-w-[180px] h-[220px]  md:min-w-[200px] rounded-[50%] hover:scale-110 duration-200 ease-in-out cursor-pointer">
      <img src="./images/ps.jpg" alt=""  className="w-[80px]"/>
      <p className="font-normal">Adobe Photoshop</p>
      </div>
    </div>
    <hr className="mt-20 w-[100%]"/>
  </div>
  )
}

export default Skills