import { Component } from 'react';
import clsx from 'clsx';
import styles from './todo.module.css';
import { IoAddCircle } from "react-icons/io5";

class ToDoEditor extends Component {
  state = {
    toDoEditor: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmitSender } = this.props;
    if (this.state.toDoEditor.trim() === '') return;
    onSubmitSender(this.state.toDoEditor);
    this.setState({ toDoEditor: '' });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form className={clsx(styles.formBlock)} onSubmit={this.handleSubmit}>
        <label htmlFor={styles.formBlockInput}>
          <input
            type="text"
            name="toDoEditor"
            value={this.state.toDoEditor}
            onChange={this.handleChange}
            id={styles.formBlockInput}
            className={clsx(styles.formBlockInput)}
          />
        </label>
        <button type="submit" className={clsx(styles.toDoBlockBtn)}>
          Додати завдання
          <IoAddCircle size={25} />
        </button>
      </form>
    );
  }
}

export default ToDoEditor;
