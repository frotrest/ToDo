import { Component } from 'react';
import clsx from 'clsx';
import styles from './todo.module.css';
import '../../index.css';
import dataToDo from './todo.json';
import ToDoInfo from './ToDoInfo';
import ToDoFilter from './ToDoFilter';
import ToDoEditor from './TodoEditor';
import ToDoList from './ToDoList';
import { nanoid } from 'nanoid';

class ToDo extends Component {
  state = {
    todos: dataToDo,
    filter: '',
  };
  addTodo = (text) => {
    const newToDo = {
      id: nanoid(),
      text,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newToDo],
    }));
  };
  deleteToDo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };
  toggleCompleted = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      }),
    }));
  };
  getVisibleToDos = () => {
    const { todos, filter } = this.state;
    return todos.filter((todo) => todo.text.toLowerCase().includes(filter.toLowerCase()));
  };
  countCompletedToDos = () => {
    return this.state.todos.filter((todo) => todo.completed).length;
  };
  componentDidMount() {
    const getToDos = localStorage.getItem('toDoListItem');
    if (getToDos) {
      this.setState({ todos: JSON.parse(getToDos) });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('toDoListItem', JSON.stringify(this.state.todos));
    }
  }
  render() {
    const visibleToDos = this.getVisibleToDos();
    const completedCount = this.countCompletedToDos();
    return (
      <section className={clsx(styles.toDoSection)}>
        <div className={clsx('container', styles.toDoContent)}>
          <h1 className={styles.toDoContentTitle}>To-Do List</h1>
          <ToDoFilter value={this.state.filter} onChange={this.changeFilter} />
          <ToDoEditor onSubmitSender={this.addTodo} />
          <div className={clsx(styles.formAdd)}>
            <ToDoInfo totalTask={this.state.todos.length} completedTasks={completedCount} />
            <ToDoList
              todos={visibleToDos}
              onDelete={this.deleteToDo}
              onToggleCompleted={this.toggleCompleted}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default ToDo;
