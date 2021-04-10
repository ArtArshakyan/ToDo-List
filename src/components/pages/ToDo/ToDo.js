import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Task from '../../Task/Task';
import NewTask from '../../NewTask/NewTask';
import Confirm from '../../Confirm/Confirm';
import EditTaskModal from '../../EditTaskModal/EditTaskModal';
import styles from './todo.module.css';

class ToDo extends Component {
    state = {
        tasks: [],
        selectedTasks: new Set(),
        showConfirm: false,
        openNewTaskModal: false,
        editTask: null
    };

    componentDidMount() {
        fetch('http://localhost:3001/task', {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(async (response) => {
                const res = await response.json();

                if (response.status >= 400 && response.status < 600) {
                    if (res.error) {
                        throw res.error;
                    }
                    else {
                        throw new Error('Something went wrong!');
                    }
                }

                this.setState({
                    tasks: res
                });
            })
            .catch((error) => {
                console.log('Catch error', error.message);
            });
    }

    addTask = (newTask) => {
        fetch('http://localhost:3001/task', {
            method: 'POST',
            body: JSON.stringify(newTask),
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(async (response) => {
                const res = await response.json();

                if (response.status >= 400 && response.status < 600) {
                    if (res.error) {
                        throw res.error;
                    }
                    else {
                        throw new Error('Something went wrong!');
                    }
                }

                const tasks = [...this.state.tasks, res];

                this.setState({
                    tasks,
                    openNewTaskModal: false
                });
            })
            .catch((error) => {
                console.log('Catch error', error.message);
            });
    };

    deleteTask = (taskId) => {
        fetch(`http://localhost:3001/task/${taskId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(async (response) => {
                const res = await response.json();

                if (response.status >= 400 && response.status < 600) {
                    if (res.error) {
                        throw res.error;
                    }
                    else {
                        throw new Error('Something went wrong!');
                    }
                }

                const newTasks = this.state.tasks.filter((task) => taskId !== task._id);

                this.setState({
                    tasks: newTasks
                });
            })
            .catch((error) => {
                console.log('Catch error', error.message);
            });
    };

    toggleTask = (taskId) => {
        const selectedTasks = new Set(this.state.selectedTasks);

        if (selectedTasks.has(taskId)) {
            selectedTasks.delete(taskId);
        } else {
            selectedTasks.add(taskId);
        }

        this.setState({
            selectedTasks
        });

    };

    removeSelected = () => {
        const { selectedTasks, tasks } = this.state;

        const body = {
            tasks: [...selectedTasks]
        };

        fetch('http://localhost:3001/task', {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(async (response) => {
                const res = await response.json();

                if (response.status >= 400 && response.status < 600) {
                    if (res.error) {
                        throw res.error;
                    }
                    else {
                        throw new Error('Something went wrong!');
                    }
                }

                const newTasks = tasks.filter((task) => {
                    if (selectedTasks.has(task._id)) {
                        return false;
                    }
                    return true;
                });

                this.setState({
                    tasks: newTasks,
                    selectedTasks: new Set(),
                    showConfirm: false
                });

            })
            .catch((error) => {
                console.log('Catch error', error.message);
            });
    };

    toggleConfirm = () => {
        this.setState({
            showConfirm: !this.state.showConfirm
        });
    };

    selectAll = () => {
        const taskIds = this.state.tasks.map((task) => task._id);
        this.setState({
            selectedTasks: new Set(taskIds)
        });
    };

    deSelectAll = () => {
        this.setState({
            selectedTasks: new Set()
        });
    };

    toggleNewTaskModal = () => {
        this.setState({
            openNewTaskModal: !this.state.openNewTaskModal
        });
    };

    handleEdit = (editTask) => {
        this.setState({ editTask });
    };

    handleSaveTask = (editedTask) => {

        fetch(`http://localhost:3001/task/${editedTask._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedTask),
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(async (response) => {
                const res = await response.json();

                if (response.status >= 400 && response.status < 600) {
                    if (res.error) {
                        throw res.error;
                    }
                    else {
                        throw new Error('Something went wrong!');
                    }
                }

                const tasks = [...this.state.tasks];
                const foundIndex = tasks.findIndex((task) => task._id === editedTask._id);
                tasks[foundIndex] = editedTask;

                this.setState({
                    tasks,
                    editTask: null
                });
            })
            .catch((error) => {
                console.log('Catch error', error.message);
            });
    };

    render() {
        const { tasks, selectedTasks, showConfirm, openNewTaskModal, editTask } = this.state;

        const taskComponents = tasks.map(task => {
            return (
                <Col
                    key={task._id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                >
                    <Task
                        data={task}
                        onToggle={this.toggleTask}
                        disabled={!!selectedTasks.size}
                        onDelete={this.deleteTask}
                        selected={selectedTasks.has(task._id)}
                        onEdit={this.handleEdit}
                    />
                </Col>
            );
        });

        return (
            <div>
                <Container>
                    <Row className={styles.addInput}>
                        <Col
                            xs={12}
                        >
                            <h2
                                className="text-center"
                            >
                                ToDo List
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            className="text-center"
                            xs={12}
                        >
                            <Button
                                className={styles.ToDoButtons}
                                variant="success"
                                onClick={this.toggleNewTaskModal}
                            >
                                Add New task
                            </Button>
                            <Button
                                className={styles.ToDoButtons}
                                variant="warning"
                                onClick={this.selectAll}
                            >
                                Select All
                            </Button>
                            <Button
                                className={styles.ToDoButtons}
                                variant="warning"
                                onClick={this.deSelectAll}
                            >
                                Deselect All
                            </Button>
                            <Button
                                className={styles.ToDoButtons}
                                variant="danger"
                                onClick={this.toggleConfirm}
                                disabled={!selectedTasks.size}
                            >
                                Delete Tasks
                            </Button>
                        </Col>
                    </Row>
                    <Row>{taskComponents}</Row>
                </Container>

                {
                    showConfirm &&
                    <Confirm
                        onClose={this.toggleConfirm}
                        onConfirm={this.removeSelected}
                        count={selectedTasks.size}
                    />
                }
                {
                    openNewTaskModal &&
                    <NewTask
                        onClose={this.toggleNewTaskModal}
                        onAdd={this.addTask}
                    />
                }
                {
                    editTask &&
                    <EditTaskModal
                        data={editTask}
                        onClose={() => this.handleEdit(null)}
                        onSave={this.handleSaveTask}
                    />
                }
            </div>
        );
    }
}
export default ToDo;
