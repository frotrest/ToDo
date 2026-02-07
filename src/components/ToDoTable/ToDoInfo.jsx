import { Component } from "react";
import clsx from "clsx";
import styles from './todo.module.css';

class ToDoInfo extends Component {
    render() {
        const {totalTask, completedTasks} = this.props;
        return (
            <div className={clsx(styles.infoBlock)}>
                <p className={clsx(styles.infoBlockTitle)}>Всього завдань: {totalTask}</p>
                <p className={clsx(styles.infoBlockTitle)}>Виконано: {completedTasks}</p>
            </div>
        );
    }
}

export default ToDoInfo;