import './Footer.css';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import links from './json/links.json';
import bottom from './json/bottom.json';
import FooterLinks from './FooterLinks';
import { TfiFacebook, TfiTwitterAlt } from 'react-icons/tfi';
import { BsInstagram } from 'react-icons/bs';
import { ReactComponent as World } from 'assets/img/world.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <nav className='footer__nav'>
                <div className='nav__logo'>
                    <a href="/" className='logo__link'><Logo className='link__image' /></a>
                </div>
                <div className='nav__links'>
                    {links.map(item => (
                        <FooterLinks key={item.id} item={item} />
                    ))}
                </div>
                <div className='nav__social-media'>
                    <ul className='social-media__list'>
                        <li className='list__icon'>
                            <a href="/" className='icon__link'>
                                <BsInstagram size={24} fill='white' />
                            </a>
                        </li>
                        <li className='list__icon'>
                            <a href="/" className='icon__link'>
                                <TfiTwitterAlt size={24} fill='white' />
                            </a>
                        </li>
                        <li className='list__icon'>
                            <a href="/" className='icon__link'>
                                <TfiFacebook size={24} fill='white' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='nav__country'>
                    <a href="/" className='country__link'>
                        <World />
                        Brasil (Português)
                    </a>            
                </div>
                <div className='nav__bottom-links'>
                    <ul className='bottom-links__list'>
                        {bottom.map(link => {
                            return (
                                <li key={link.id} className='list__bottom-item'>
                                    <a href="/" className='bottom-item__link'>{link.text}</a>
                                </li>
                            );
                        })}
                    </ul>
                    <span className='bottom-links__copy'>© 2023 Spotify AB</span>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
