import { Component } from 'react';
import clsx from 'clsx';
import styles from './todo.module.css';
import { FaBan } from 'react-icons/fa6';

class ToDoList extends Component {
  render() {
    const { todos, onDelete, onToggleCompleted } = this.props;
    return (
      <ul className={clsx(styles.toDoList)}>
        {todos.map(({ id, text, completed }) => (
          <li key={id} className={clsx(styles.toDoListTask)}>
            <div className={clsx(styles.toDoListTaskContent)}>
              <label htmlFor={styles.todoItemInput} className={clsx(styles.toDoListTaskLabel)}>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => onToggleCompleted(id)}
                  id={styles.todoItemInput}
                  className={clsx(styles.toDoListTaskInput)}
                />
              </label>
              <h2
                className={clsx(styles.toDoListTaskTitle, completed ? styles.toDoListTaskTitleDone : null)}
              >
                {text}
              </h2>
            </div>
            <button onClick={() => onDelete(id)} className={clsx(styles.toDoListTaskBtn)}>
              Видалити <FaBan size={20} />
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ToDoList;
