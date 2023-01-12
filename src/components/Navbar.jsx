import React, { useEffect, useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = ({page, plan, contact, setRegistration, setMain}) => {
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    const scrollId = (reference) => {
        setOpenMenu(false);
        reference.current.scrollIntoView({behavior: "smooth"});
    }

    return (
        <nav>
            <div className={openMenu ? "menu rotate" : "menu"} onClick={() => setOpenMenu(!openMenu)}>
                <GiHamburgerMenu />
            </div>
            <ul className={openMenu ? "navbar" : "navbar isclosed"}>
                <li className='navitem' onClick={() => {
                    setOpenMenu(false);
                    setMain();
                }}>
                    {!page ? "Info" : "Strona główna"}
                </li>
                <li className={!page ? "navitem" : "none"} onClick={() => scrollId(plan)}>
                    Plan
                </li>
                <li className={!page ? "navitem" : "none"} onClick={() => {
                    setOpenMenu(false);
                    setRegistration();
                }}>
                    Rejestracja
                </li>
                <li className={!page ? "navitem" : "none"} onClick={() => scrollId(contact)}>
                    Kontakt
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
