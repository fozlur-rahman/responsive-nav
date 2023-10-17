import { Link, NavLink } from "react-router-dom";
import './Nav.css';
import { useState } from "react";
import { FaBars, } from 'react-icons/fa';
import { BsXLg } from "react-icons/bs";


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { path: '/', display: 'Home' },
        { path: '/about', display: 'About' },
        { path: '/contact', display: 'Contact' },
        { path: '/services', display: 'Services' },
        { path: '/blog', display: 'Blog' }
    ];

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="w-full py-4 shadow-lg nav sm:text-[18px]">
            <div className="navbar sm:flex block ">
                <div className="flex">
                    <div>
                        <Link className="text-2xl font-bold" to='/'>Fozlur</Link>
                    </div>

                    {/* toggle btn  */}
                    <button className="sm:hidden block ms-auto ps-5" onClick={handleClick}>
                        {isOpen ? <BsXLg></BsXLg> : <FaBars></FaBars>}
                    </button>
                </div>

                {/* nav items  */}
                <ul className={`sm:flex sm:space-x-5 block ms-auto  ${isOpen ? 'is-open' : 'not-open'}`}>
                    {
                        navItems.map(item => <li
                            className="navitem"
                            onClick={handleClick}
                            key={item.display}
                        ><NavLink className="nav-item" activeclassname='active' to={item.path}>{item.display}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Nav;
