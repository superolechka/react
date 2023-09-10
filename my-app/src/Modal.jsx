import React from 'react';

class Modal extends React.Component {
    render() {
        const { isOpen, children, toggle } = this.props;

        return (
            <div 
                className={`modal ${isOpen ? 'fade show' : ''}`} 
                style={{ display: isOpen ? 'block' : 'none' }} 
                role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {children}
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close" 
                            onClick={toggle}>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;