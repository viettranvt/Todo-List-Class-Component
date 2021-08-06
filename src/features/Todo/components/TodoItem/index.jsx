import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends PureComponent {
  render() {
    const { todo, onTodoClick } = this.props;

    const handleTodoClick = (todo) => onTodoClick(todo);

    return (
      <li className={todo.completed ? 'done' : ''}>
        {todo.title}
        {!todo.completed && (
          <button
            onClick={() => {
              handleTodoClick(todo);
            }}
          >
            Delete
          </button>
        )}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoItem;
