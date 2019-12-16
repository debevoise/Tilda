import React from 'react';

const Modal = ({ handleClose, active, children}) => {
    if (!active) return null;
    
    return (
        <div className='modal-background'>
            <section className='modal-content'>
                <button className='modal-close' onClick={handleClose}>       
                    <i className="material-icons hide-icon">
                    close
                    </i>
                </button>
                {children}
            </section>
        </div>
    )
}

export default Modal;
