import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="p-3 font-raj text-bold border-b-4 border-b-verm">
            <ul className='flex md:flex-row flex-col justify-center'>
                <li className='mx-5'>
                    <Link to={`/`} className="font-raj font-bold text-2xl">Home</Link>
                </li>
                <li className='mx-5'>
                    <Link to={`/agentes`} className="font-raj font-bold text-2xl">Agentes</Link>
                </li>
                <li className='mx-5'>
                    <Link to={`/mapas`} className="font-raj font-bold text-2xl">Mapas</Link>
                </li>
                <li className='mx-5'>
                    <Link to={`/bundles`} className="font-raj font-bold text-2xl">Bundles</Link>
                </li>
                <li className='mx-5'>
                    <Link to={`/armas`} className="font-raj font-bold text-2xl">Armas</Link>
                </li>
                <li className='mx-5'>
                    <Link to={`/cards`} className="font-raj font-bold text-2xl">Cards</Link>
                </li>
                <li className='mx-5'>
                    <Link to={`/chaveiros`} className="font-raj font-bold text-2xl">Chaveiros</Link>
                </li>
                <li className='mx-5'>
                    <Link to={`/sprays`} className="font-raj font-bold text-2xl">Sprays</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;