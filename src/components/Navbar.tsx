import {Link} from 'react-router-dom'

import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar p-3">
            <h2>
                <Link to={`/`} className="logo">Valorant</Link>
            </h2>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/agentes`}>Agentes</Link>
                </li>
                <li>
                    <Link to={`/mapas`}>Mapas</Link>
                </li>
                <li>
                    <Link to={`/bundles`}>Bundles</Link>
                </li>
                <li>
                    <Link to={`/sprays`}>Armas</Link>
                </li>
                <li>
                    <Link to={`/cards`}>Cards</Link>
                </li>
                <li>
                    <Link to={`/chaveiros`}>Chaveiros</Link>
                </li>
                <li>
                    <Link to={`/sprays`}>Sprays</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;