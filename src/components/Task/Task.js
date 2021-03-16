import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './taskStyle.module.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

class Task extends Component {

    handleChange = () => {
        const { onToggle, data } = this.props;
        onToggle(data._id);
    };

    render() {
        const task = this.props.data;
        const { disabled, onDelete, selected, onEdit } = this.props;

        return (
            <Card className={`${styles.task} ${selected ? styles.selected : ''}`}>
                <Card.Body>
                    <input
                        type="checkbox"
                        onChange={this.handleChange}
                        checked={selected}
                    />
                    <Card.Title>
                        {task.title}
                    </Card.Title>
                    <Card.Text>
                        {task.description}
                    </Card.Text>
                    <Button
                        className="mr-2"
                        variant="warning"
                        onClick={() => onEdit(task)}
                        disabled={disabled}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => onDelete(task._id)}
                        disabled={disabled}
                    >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

Task.propTypes = {
    data: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
};

export default Task;