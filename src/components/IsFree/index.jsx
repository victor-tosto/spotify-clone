import './IsFree.css';
import { ReactComponent as Phone } from 'assets/img/phone.svg';
import phonePlaylist from 'assets/img/phone-playlist.jpeg';

const IsFree = () => {
    return (
        <section className='is-free'>
            <div className='is-free__phone'>
                <Phone className='phone__image' />
                <img className='phone__playlist' src={phonePlaylist} alt="Playlist" />
            </div>
            <div className='is-free__blur'></div>
            <div className='is-free__info'>
                <h2 className='info__content'>É grátis.</h2>
                <h2 className='info__content'>Não precisa de cartão de crédito.</h2>
            </div>
        </section>
    );
}

export default IsFree;
