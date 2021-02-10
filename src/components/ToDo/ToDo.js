import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './todo.module.css'

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
        const taskComponents = tasks.map((task, index) => {

            return (
                <Col
                    key={index}
                    className={styles.myCol}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                >
                    <div className={styles.selected}>{task}</div>
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
                    <Row className='justify-content-center'>
                        {taskComponents}
                    </Row>
                </Container>
            </div>
        );
    };
}
export default ToDo;