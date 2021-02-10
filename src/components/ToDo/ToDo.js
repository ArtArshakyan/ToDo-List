import React, { Component } from 'react';
import styles from './todo.module.css';
import { Container, Row, Col } from 'react-bootstrap';

class ToDo extends Component {
    state = {
        inputValue: '',
        tasks: []
    };

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    addTask = () => {
        const inputValue = this.state.inputValue.trim();

        if (!inputValue) {
            return;
        }

        const tasks = [...this.state.tasks, inputValue];

        this.setState({
            tasks,
            inputValue: ''
        });
    };

    render() {
        const { tasks, inputValue } = this.state;

        // Variant 1
        // const taskComponents = tasks.map((task, index) => {
        //     return <li key={index} className={index === 2 ? styles.selected : null}>{task}</li>;
        // });

        // Variant 2
        // const taskComponents = tasks.map((task, index) => {
        //     return <li key={index} className={`${index === 2 ? styles.selected : ''} ${styles.task}`}>{task}</li>;
        // });

        // Variant 3
        const taskComponents = tasks.map((task, index) => {
            const classes = [styles.task];

            if (index === 2) {
                classes.push(styles.selected)
            }

            return (
                <Col
                    className={styles.myCol}
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                >
                    <div className={classes.join(' ')}>{task}</div>
                </Col>
            );
        });

        return (
            <div>
                <h2>ToDo List</h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={this.handleChange}
                />

                <button
                    onClick={this.addTask}
                >
                    Add New Task
                </button>

                <Container>
                    <Row>
                        {taskComponents}
                    </Row>
                </Container>
            </div>
        );
    };
}
export default ToDo;