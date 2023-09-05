import React from 'react';

class Button extends React.Component {
    render() {
        return (
        <button type="button" {...this.props} className = {'btn ' + this.props?.className}>
            {this.props.children}
        </button>
        )
    }
}

export default Button