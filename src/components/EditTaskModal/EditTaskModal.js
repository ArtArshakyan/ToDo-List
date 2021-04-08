import React, { Component } from 'react';
import { FormControl, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import { formatDate } from '../../helpers/utils';
import "react-datepicker/dist/react-datepicker.css";

class EditTaskModal extends Component {
    constructor(props) {
        super(props);
        const { date } = props.data;

        this.state = {
            ...props.data,
            date: date ? new Date(date) : new Date()
        };

    };

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

        this.props.onSave({
            _id: this.state._id,
            title,
            description,
            date: formatDate(date.toISOString())
        });
    };

    handleChangeDate = (value) => {
        this.setState({
            date: value || new Date()
        });
    };

    render() {
        const { onClose } = this.props;
        const { title, description } = this.state;

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
                        Edit Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        className="mb-3"
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    <FormControl
                        placeholder="Description"
                        as="textarea"
                        rows={5}
                        name="description"
                        value={description}
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
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

EditTaskModal.propTypes = {
    data: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default EditTaskModal;