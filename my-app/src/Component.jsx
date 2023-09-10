import React from 'react';
import Modal from './Modal';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modal: false };
    }

    toggle = (e) => {
        this.setState({ modal: !this.state.modal });
    }

    render() {
        return (
            <div>
                <button 
                    type="button" 
                    className="modal-open-button btn btn-danger" 
                    onClick={this.toggle}>
                    Open
                </button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <div className="modal-header">
                    <div className="modal-title">Modal title</div>
                </div>
                <div className="modal-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </div>
                <div className="modal-footer">
                    <button 
                        type="button" 
                        className="modal-close-button btn btn-default" 
                        onClick={this.toggle}>Cancel
                    </button>
                </div>
                </Modal>
            </div>
        );
    }
}

export default Component;
