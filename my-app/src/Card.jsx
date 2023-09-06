import React from 'react';

class Card extends React.Component {
    static Body = ({ children }) => (
        <div className="card-body">{children}</div>
    );

    static Title = ({ children }) => (
        <h4 className="card-title">{children}</h4>
    );

    static Text = ({ children }) => (
        <p className="card-text">{children}</p>
    );

    render() {
        return (
        <div className="card">
            {this.props.children}
        </div>
        );
    }
}

export default Card;
