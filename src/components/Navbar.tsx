import { useState } from 'react';
import { Link } from 'react-router-dom'
import { BsList, BsFillPersonFill, BsFillHouseFill } from "react-icons/bs";
import { GiCardboardBoxClosed, GiSpray, GiCardPick, GiPathDistance, GiGems } from "react-icons/gi";

const Navbar = () => {
  const [navbar, setNavbar] = useState<string>("hidden");

  function navbarResponsive(e: any) {
    e.preventDefault();
    if (navbar == "hidden") {
      setNavbar("flex");
    }
    if (navbar == "flex") {
      setNavbar("hidden");
    }
  }

  function navbarFechar() {
    if (navbar == "flex") {
      setNavbar("hidden");
    }
  }
  return (
    <nav className="py-2 font-raj text-bold border-b-4 border-b-verm bg-vava text-verm z-50">
      <div className="lg:hidden flex flex-row justify-between items-center">
        <Link to={`/`}><div className="uppercase ml-2 sm:text-4xl text-2xl font-raj font-bold z-20">
          Valorant Database
        </div></Link>
        <BsList
          className="text-5xl mx-2 hover:bg-verm hover:text-vava cursor-pointer rounded-lg transition"
          onClick={navbarResponsive}
        />
      </div>
      <ul className={`lg:flex lg:flex-row flex-col justify-center items-center ${navbar}`}>
        <Link to={`/`}><li onClick={navbarFechar} className='xl:mx-1 flex xl:px-5 py-1 px-3 rounded-lg hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
          <BsFillHouseFill className='text-2xl mt-1 mr-1' /><span className="font-raj font-bold text-2xl">Home</span>
        </li></Link>
        <Link to={`/agentes`}><li onClick={navbarFechar} className='xl:mx-1 flex xl:px-5 py-1 px-3 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
          <BsFillPersonFill className='text-2xl mt-1 mr-1' /><span className="font-raj font-bold text-2xl">Agentes</span>
        </li></Link>
        <Link to={`/mapas`}><li onClick={navbarFechar} className='xl:mx-1 flex xl:px-5 px-3 py-1 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
          <GiPathDistance className='text-2xl mt-1 mr-1' /><span className="font-raj font-bold text-2xl">Mapas</span>
        </li></Link>
        <Link to={`/bundles`}><li onClick={navbarFechar} className='xl:mx-1 flex xl:px-5 px-3 py-1 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
          <GiCardboardBoxClosed className='text-2xl mt-1 mr-1' /><span className="font-raj font-bold text-2xl">Bundles</span>
        </li></Link>
        <Link to={`/cards`}><li onClick={navbarFechar} className='xl:mx-1 flex xl:px-5 px-3 py-1 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
          <GiCardPick className='text-2xl mt-1 mr-1' /><span className="font-raj font-bold text-2xl">Cards</span>
        </li></Link>
        <Link to={`/chaveiros`}><li onClick={navbarFechar} className='xl:mx-1 flex xl:px-5 px-3 py-1 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
          <GiGems className='text-2xl mt-1 mr-1' /><span className="font-raj font-bold text-2xl">Chaveiros</span>
        </li></Link>
        <Link to={`/sprays`}><li onClick={navbarFechar} className='xl:mx-1 flex xl:px-5 px-3 py-1 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
          <GiSpray className='text-2xl mt-1 mr-1' /><span className="font-raj font-bold text-2xl">Sprays</span>
        </li></Link>
      </ul>
    </nav>
  )
};

export default Navbar;