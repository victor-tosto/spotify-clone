import { useState } from 'react';
import './Modal.css';

const Modal = () => {

    const [open, setOpen] = useState(true);

    const closeModal = () => {
        setOpen(!open);
    }

    return (
        open &&
        <div className='header__modal'>
            <a href="/" className='modal__link'>Brazil (English)</a>
            <button onClick={closeModal} className='modal__button'>✕</button>
        </div> 
    );
}

export default Modal;
