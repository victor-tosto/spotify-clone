import './Doubt.css';
import DoubtItem from './DoubtItem';
import doubt from './doubt.json';

const Doubt = () => {
    return (
        <section className='doubt'>
            <h2 className='doubt__title'>Alguma dúvida?</h2>
            <ul className='doubt__list'>
               {doubt.map(item => (
                <DoubtItem key={item.id} title={item.title} paragraph={item.paragraph} />
               ))}
            </ul>
        </section>
    );
}

export default Doubt;
