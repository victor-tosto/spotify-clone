import './Features.css';
import features from './features.json';

const Features = () => {
    return (
        <section className='features'>
            <h2 className='features__title'>Por que escolher o Spotify?</h2>
            <ul className='features__list'>
                {features.map(feature => {

                    const { image, alt, title, info, id } = feature;

                    return (
                        <li key={id} className='list__feature'>
                            <img src={image} alt={alt} className='feature__image' />
                            <div className='feature__info'>
                                <h3 className='info__title'>{title}</h3>
                                <p className='info__text'>{info}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Features;
