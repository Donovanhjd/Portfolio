import {useState} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../../../styles.js';
import {navLinks} from '../../../constants/index.js';
import {logo} from '../../../assets/index.js';
import Hamburger from 'hamburger-react';
import {motion} from 'framer-motion';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [menuHeight, setMenuHeight] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!isOpen);
        setMenuHeight(isOpen ? 0 : 'auto');
    };

    const handleLinkClick = (nav) => {
        setActive(nav.title);

        const closeMenuAfterScroll = () => {
            setOpen(false);
            setMenuHeight(0);
        };

        const section = document.getElementById(nav.id);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
            setTimeout(closeMenuAfterScroll, 500);
        }
    };

    return (
        <nav
            className={`${styles.paddingX} w-full py-4 fixed z-10 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md`}>
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    activeClass='active'
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        Donovan &nbsp;<span className="sm:block hidden">de Klerk</span>
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li key={nav.id}
                            className={`${active === nav.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex items-center">
                    <Hamburger toggled={isOpen} toggle={toggleMenu}/>
                </div>
            </div>
            <motion.div className="flex justify-center overflow-hidden"
                        initial={{height: 0}}
                        animate={{height: menuHeight}}
                        transition={{duration: 0.3, ease: 'easeInOut'}}>
                <ul className="list-none flex flex-col gap-4">
                    {navLinks.map((nav) => (
                        <li key={nav.id}
                            className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? 'text-white' : 'text-secondary'}`}
                            onClick={() => handleLinkClick(nav)}>
                            <Link
                                to={`${nav.id}`}
                                activeClass='active'
                                spy={true}
                            >
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </nav>
    );
};

export default Navbar;
