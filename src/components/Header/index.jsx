import Modal from "./Modal";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import './Header.css';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import { useState } from "react";

const Header = () => {

    const isMobile = window.innerWidth <= 768;

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
        document.body.classList.toggle('suppress-scroll');
    };

    return (
        <>
            <Modal />
            <header className="header">
                <div className="header__container">
                    <a href="/" className="container__logo">
                        <Logo className="logo__image" />
                    </a>
                    {(isMobile && 
                    (<button onClick={handleToggle} className={isActive ? "container__menu active" : "container__menu"} aria-expanded={isActive ? "true" : "false"}>
                        <span className="menu__bar"></span>
                        <span className="menu__bar"></span>
                        <span className="menu__bar"></span>
                    </button>)) || <NavDesktop />}
                </div>
                {isActive && <div className="overlay"></div>}
                {isMobile && <NavMobile isActive={isActive} logo={<Logo className="logo__image--nav-mobile" />} />}
            </header>
        </>
    );
}

export default Header;
