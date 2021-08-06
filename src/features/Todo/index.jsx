import React, { PureComponent } from 'react';
import AddTask from './components/AddTask';
import uuid from 'react-uuid';
import TodoList from './components/TodoList';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../actions/todo';
import { connect } from 'react-redux';

class Todo extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todoList: [
  //       { id: uuid(), title: 'Pay Bills', completed: true },
  //       { id: uuid(), title: 'Learn ReactJS', completed: false },
  //       { id: uuid(), title: 'Learn NodeJS Express', completed: true },
  //       { id: uuid(), title: 'Learn PassportJS', completed: false },
  //       { id: uuid(), title: 'Complete Final Project', completed: false },
  //       { id: uuid(), title: 'Have Dinner', completed: false },
  //       { id: uuid(), title: 'Complete Final Project', completed: false },
  //     ],
  //   };
  // }

  render() {
    //const { todoList } = this.state;

    //get redux by prop
    const { todo, actions } = this.props;
    const todoList = todo.list;

    const handleOnSubmitAddTask = (value) => {
      //const newTodoList = [...todoList];
      const newTask = {
        id: uuid(),
        title: value,
        completed: false,
      };

      //newTodoList.push(newTask);

      // this.setState({
      //   todoList: newTodoList,
      // });
      actions.addTask(newTask);
    };

    const handleTodoClick = (todo) => {
      // const newTodoList = [...todoList];
      // const todoIndex = todoList.findIndex((td) => todo.id === td.id);

      // if (todoIndex > 0) {
      //   newTodoList[todoIndex].completed = true;

      //   // this.setState({
      //   //   todoList: newTodoList,
      //   // });
      // }
      actions.doneTask(todo);
    };

    return (
      <div>
        <AddTask title='Add Task' onAddTask={handleOnSubmitAddTask} />
        <TodoList
          title='Todo List'
          todoList={todoList}
          onTodoClick={handleTodoClick}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
