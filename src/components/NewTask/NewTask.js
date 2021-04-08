import React, { Component } from 'react';
import { FormControl, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import { formatDate } from '../../helpers/utils';
import "react-datepicker/dist/react-datepicker.css";

class NewTask extends Component {
    state = {
        title: '',
        description: '',
        date: new Date()
    };

    /* Variant 1 */
    // handleChange = (value, name) => {
    //     this.setState({
    //         [name]: value
    //     });
    // };

    /* Variant 2 */
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    };

    handleSubmit = () => {
        const title = this.state.title.trim();
        const description = this.state.description.trim();
        const { date } = this.state;

        if (!title) {
            return;
        }

        const newTask = {
            title,
            description,
            date: formatDate(date.toISOString())
        };

        this.props.onAdd(newTask);
    };

    handleChangeDate = (value) => {
        this.setState({
            date: value || new Date()
        });
    };

    render() {
        const { onClose } = this.props;

        return (
            <Modal
                show={true}
                onHide={onClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add New Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        className="mb-3"
                        placeholder="Title"
                        name='title'
                        // onChange={(event) => this.handleChange(event.target.value, 'title')}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    <FormControl
                        placeholder="Description"
                        as="textarea"
                        rows={5}
                        name='description'
                        // onChange={(event) => this.handleChange(event.target.value, 'description')}
                        onChange={this.handleChange}
                    />
                    <DatePicker
                        minDate={new Date()}
                        selected={this.state.date}
                        onChange={this.handleChangeDate}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={this.handleSubmit}
                        variant="success"
                    >
                        Add
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

NewTask.propTypes = {
    onClose: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
};

export default NewTask;