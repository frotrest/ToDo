import { Component } from 'react';
import clsx from 'clsx';
import styles from './todo.module.css';

class ToDoFilter extends Component {
  render() {
    const {value, onChange} = this.props;
    return (
      <>
        <input type="text" value={value} onChange={onChange} className={clsx(styles.inputFilter)} placeholder="Фільтр завдань..." />
      </>
    );
  }
}

export default ToDoFilter;
