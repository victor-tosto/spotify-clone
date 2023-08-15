import './Footer.css';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import footer from './footer.json';

const Footer = () => {
    return (
        <footer className='footer'>
            <nav className='footer__nav'>
                <div className='nav__logo'>
                    <a href="/" className='logo__link'><Logo className='link__image' /></a>
                </div>
                <div className='nav__links'>
                    {footer.map(item => {
                        return (
                            <dl key={item.id}>
                                <dt>{item.title}</dt>
                                <dd>
                                    <a href="/">{item.item1}</a>
                                </dd>
                                <dd>
                                    <a href="/">{item.item2}</a>
                                </dd>
                                <dd>
                                    <a href="/">{item.item3}</a>
                                </dd>
                                {item.item4 && 
                                <dd>
                                    <a href="/">{item.item4}</a>
                                </dd>
                                }
                                {item.item5 && 
                                <dd>
                                    <a href="/">{item.item5}</a>
                                </dd>
                                }
                            </dl>
                        );
                    })}
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
