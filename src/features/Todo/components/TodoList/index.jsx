import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

class TodoList extends PureComponent {
  render() {
    const { todoList, onTodoClick, title } = this.props;

    const handleTodoClick = (item) => onTodoClick(item);

    return (
      <div>
        <h3>{title}</h3>
        <ul>
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              onTodoClick={() => {
                handleTodoClick(item);
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
