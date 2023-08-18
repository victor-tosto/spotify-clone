import './NavMobile.css';

const NavMobile = ({ logo, isActive }) => {
    return (
        <nav className={isActive ? "header__nav-mobile active" : "header__nav-mobile"}>
            <ul className="nav-mobile__list">
                <li className="list__item">
                    <a href="/" className="item__link">Premium</a>
                </li>
                <li className="list__item">
                    <a href="/" className="item__link">Suporte</a>
                </li>
                <li className="list__item">
                    <a href="/" className="item__link">Baixar</a>
                </li>
                <li className='list__item--separator'>
                </li>
                <li className="list__item">
                    <a href="/" className="item__link--login">Inscrever-se</a>
                </li>
                <li className="list__item">
                    <a href="/" className="item__link--login">Entrar</a>
                </li>
            </ul>
            <a href="/" className='nav-mobile__logo'>
                {logo}
            </a>
        </nav>
    );
}

export default NavMobile;
