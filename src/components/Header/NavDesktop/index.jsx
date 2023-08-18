import './NavDesktop.css';

const NavDesktop = () => {
    return (
        <nav className='header__nav-desktop'>
            <ul className='nav-desktop__list'>
                <li className='nav-desktop__item'>
                    <a href="/" className='nav-desktop__link'>Premium</a>
                </li>
                <li className='nav-desktop__item'>
                    <a href="/" className='nav-desktop__link'>Suporte</a>
                </li>
                <li className='nav-desktop__item'>
                    <a href="/" className='nav-desktop__link'>Baixar</a>
                </li>
                <li className='nav-desktop__separator'>
                </li>
                <li className='nav-desktop__item'>
                    <a href="/" className='nav-desktop__link--alt'>Inscrever-se</a>
                </li>
                <li className='nav-desktop__item'>
                    <a href="/" className='nav-desktop__link--alt'>Entrar</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavDesktop;
