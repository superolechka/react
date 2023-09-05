import React from 'react';

class Alert extends React.Component {
  render() {
    const validTypes = [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ];

    if (!validTypes.includes(this.props.type)) {
      console.error(`Invalid alert type: ${this.props.type}`);
      return null;
    }

    const alertClass = `alert alert-${this.props.type}`;

    return (
      <div className={alertClass} role="alert">
        {this.props.text}
      </div>
    );
  }
}

export default Alert;
