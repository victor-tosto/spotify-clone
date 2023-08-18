import './Banner.css';
import { ReactComponent as Phone } from 'assets/img/phone-banner.svg'
import phoneContent from 'assets/img/phone-content.jpg';

const Banner = () => {

    const isDesktop = window.innerWidth >= 992;

    return (
        <section className='banner'>

            <div className='banner__wrapper'>
                {isDesktop && 
                <div className='banner__desktop'>
                    <Phone className='desktop__phone' />
                    <div className='phone__content-desktop'>
                        <img src={phoneContent} alt="Conteúdo celular" className='content-desktop__image' />
                    </div>
                </div>
                }

                <div className='banner__container'>
                    <h1 className='banner__text'>Escute milhões de músicas e podcasts de graça.</h1>
                    <a className='banner__link' href="/">Baixe o Spotify Free</a>
                </div>
            </div>
        </section>
    );
}

export default Banner;
