import { useState } from 'react';
import {Link} from 'react-router-dom'
import { BsList, BsFillPersonFill, BsFillHouseFill } from "react-icons/bs";
import { GiGlock, GiCardboardBoxClosed, GiSpray, GiCardPick, GiPathDistance, GiGems } from "react-icons/gi";

const Navbar = () => {
    const [navbar, setNavbar] = useState("hidden");

    function navbarResponsive(e: any) {
      e.preventDefault();
      if (navbar == "hidden") {
        setNavbar("flex");
      }
      if (navbar == "flex") {
        setNavbar("hidden");
      }
    }
    return (
        <nav className="py-2 font-raj text-bold border-b-4 border-b-verm bg-vava text-verm">
            <div className="lg:hidden flex flex-row justify-between items-center">
        <div className="uppercase ml-2 sm:text-4xl text-2xl font-raj font-bold">
            Valorant Database
        </div>
        <BsList
          className="text-5xl mx-2 hover:bg-verm hover:text-vava cursor-pointer rounded-lg transition"
          onClick={navbarResponsive}
        />
      </div>
            <ul className={`lg:flex lg:flex-row flex-col justify-center items-center ${navbar}`}>
                <li className='xl:mx-1 flex px-5 py-1 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
                <BsFillHouseFill className='text-2xl mt-1 mr-1' /><Link to={`/`} className="font-raj font-bold text-2xl">Home</Link>
                </li>
                <li className='xl:mx-1 flex xl:px-5 py-1 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
                <BsFillPersonFill className='text-2xl mt-1 mr-1' /><Link to={`/agentes`} className="font-raj font-bold text-2xl">Agentes</Link>
                </li>
                <li className='xl:mx-1 flex xl:px-5 px-3 py-1 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
                <GiPathDistance className='text-2xl mt-1 mr-1' /><Link to={`/mapas`} className="font-raj font-bold text-2xl">Mapas</Link>
                </li>
                <li className='xl:mx-1 flex xl:px-5 px-3 py-1 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
                <GiCardboardBoxClosed className='text-2xl mt-1 mr-1' /><Link to={`/bundles`} className="font-raj font-bold text-2xl">Bundles</Link>
                </li>
                <li className='xl:mx-1 flex xl:px-5 px-3 py-1 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
                    <GiGlock className='text-2xl mt-1 mr-1' /><Link to={`/armas`} className="font-raj font-bold text-2xl">Armas</Link>
                </li>
                <li className='xl:mx-1 flex xl:px-5 px-3 py-1 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
                <GiCardPick className='text-2xl mt-1 mr-1' /><Link to={`/cards`} className="font-raj font-bold text-2xl">Cards</Link>
                </li>
                <li className='xl:mx-1 flex xl:px-5 px-3 py-1 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
                <GiGems className='text-2xl mt-1 mr-1' /><Link to={`/chaveiros`} className="font-raj font-bold text-2xl">Chaveiros</Link>
                </li>
                <li className='xl:mx-1 flex xl:px-5 px-3 py-1 rounded-lg  hover:bg-verm hover:text-vava transition duration-300 cursor-pointer lg:my-0 my-1'>
                <GiSpray className='text-2xl mt-1 mr-1' /><Link to={`/sprays`} className="font-raj font-bold text-2xl">Sprays</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;