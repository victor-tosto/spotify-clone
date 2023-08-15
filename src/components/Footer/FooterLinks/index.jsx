import './FooterLinks.css';

const FooterLinks = ({item}) => {
    return (
        <dl className='links__container'>
            <dt className='container__title'>{item.title}</dt>
            <dd><a href="/" className='container__item'>{item.item1}</a></dd>
            <dd><a href="/" className='container__item'>{item.item2}</a></dd>
            <dd><a href="/" className='container__item'>{item.item3}</a></dd>
            {item.item4 && <dd><a href="/" className='container__item'>{item.item4}</a></dd>}
            {item.item5 && <dd><a href="/" className='container__item'>{item.item5}</a></dd>}
        </dl>
    );
}

export default FooterLinks;
