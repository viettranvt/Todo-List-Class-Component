import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AddTask extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { value } = this.state;
    const { title, onAddTask } = this.props;

    const handleAddTaskClick = () => {
      if (onAddTask) {
        onAddTask(value);
        this.setState({ value: '' });
      }
    };

    const handleValueChange = (e) => this.setState({ value: e.target.value });

    return (
      <div>
        <h3>{title}</h3>
        <div className='fg'>
          <input type='text' value={value} onChange={handleValueChange} />
          <button onClick={handleAddTaskClick}>Add</button>
        </div>
      </div>
    );
  }
}

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddTask;
