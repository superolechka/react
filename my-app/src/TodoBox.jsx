import React from 'react';
import Item from './Item';

class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      items: [],
    };
  }

  uniqueId() {
    return '_' + Math.random().toString(36);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { task, items } = this.state;
    if (task.trim() !== '') {
      this.setState({
        items: [{ id: this.uniqueId(), text: task }, ...items],
        task: '',
      });
    }
  };

  handleRemove = (id) => {
    const updatedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: updatedItems });
  };

  render() {
    const { task, items } = this.state;

    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.handleSubmit}>
            <div className="me-3">
              <input
                type="text"
                value={task}
                onChange={(e) => this.setState({ task: e.target.value })}
                required
                className="form-control"
                placeholder="I am going..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </form>
        </div>
        <div>
          {items.map((item) => (
            <Item key={item.id} task={item.text} onRemove={() => this.handleRemove(item.id)} />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoBox;
