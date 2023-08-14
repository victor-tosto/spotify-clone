import { useState } from 'react';
import './DoubtItem.css';
import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const DoubtItem = ({ title, paragraph }) => {

    const [open, setOpen] = useState(false);

    const openList = () => {
        setOpen(!open);
    }

    return (
        <li className='list__doubt'>
            <div onClick={openList} className={open ? 'doubt__info open' : 'doubt__info'}>
                <h3 className='info__description'>{title}</h3>
                <Arrow className='doubt__arrow' />
            </div>
            {open &&
            <div className='doubt__paragraph'>
                <ReactMarkdown children={paragraph} />
            </div>
            }
        </li>
    );
}

export default DoubtItem;
