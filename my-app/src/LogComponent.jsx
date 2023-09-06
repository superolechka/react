import React from 'react';

class LogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
    };
  }

  handleIncrement = () => {
    const { log } = this.state;
    const newValue = log.length > 0 ? log[0] + 1 : 1;
    this.setState({
      log: [newValue, ...log],
    });
  };

  handleDecrement = () => {
    const { log } = this.state;
    const newValue = log.length > 0 ? log[0] - 1 : -1;
    this.setState({
      log: [newValue, ...log],
    });
  };

  handleDelete = (index) => {
    const { log } = this.state;
    const updatedLog = [...log];
    updatedLog.splice(index, 1);
    this.setState({
      log: updatedLog,
    });
  };

  render() {
    const { log } = this.state;
    const divStyle = {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        }
    return (
        <div>
            <div className="btn-group font-monospace" role="group">
            <button type="button" className="btn btn-outline-success" onClick={this.handleIncrement}>+</button>
            <button type="button" className="btn btn-outline-danger" onClick={this.handleDecrement}>-</button>
            </div>
            <div className="list-group" style= {divStyle}>
            {log.map((value, index) => (
                <button
                type="button"
                className="list-group-item list-group-item-action"
                key={index}
                onClick={() => this.handleDelete(index)}
                >
                {value}
                </button>
            ))}
            </div>
        </div>
    );
  }
}

export default LogComponent;
