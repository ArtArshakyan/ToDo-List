import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import styles from './todo.module.css';
import idGenerator from '../../helpers/idGenerator';

class ToDo extends Component {
    state = {
        inputValue: '',
        tasks: [],
    };

    handleChange = event => {
        this.setState({
            inputValue: event.target.value,
        });
    };

    addTask = () => {
        const inputValue = this.state.inputValue.trim();

        if (!inputValue) {
            return;
        }

        const newTask = {
            _id: idGenerator(),
            title: inputValue,
        };

        const tasks = [...this.state.tasks, newTask];

        this.setState({
            tasks,
            inputValue: '',
        });
    };

    deleteTask = (taskId) => {
        const newTasks = this.state.tasks.filter((task) => taskId !== task._id);

        this.setState({
            tasks: newTasks
        });
    };

    render() {
        const { tasks, inputValue } = this.state;

        const taskComponents = tasks.map(task => {
            return (
                <Col
                    key={task._id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                >
                    <Card className={styles.task}>
                        <Card.Body>
                            <Card.Title>{task.title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title
                            </Card.Text>
                            <Button
                                variant="danger"
                                onClick={() => this.deleteTask(task._id)}
                            >
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            );
        });

        return (
            <div>
                <Container>
                    <Row>
                        <Col
                            xs={12}
                        >
                            <h2>ToDo List</h2>
                        </Col>
                        <Col
                            xs={12}
                        >
                            <InputGroup>
                                <FormControl
                                    placeholder="Create your tasks"
                                    value={inputValue}
                                    onChange={this.handleChange}
                                />
                                <InputGroup.Append>
                                    <Button
                                        variant="outline-primary"
                                        onClick={this.addTask}
                                    >
                                        Add New Task
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>{taskComponents}</Row>
                </Container>
            </div>
        );
    }
}
export default ToDo;
