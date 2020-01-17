import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

export default class CustomerModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }
    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.name === "checkbox") {
            this.setState({ activeItem: e.target.value })
            value = e.target.value;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };

    render() {
        const { toggle, onSave } = this.props;
        console.log("Customer: " + this.state.activeItem)
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}> Member Information </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="customer_first_name">First Name</Label>
                            <Input
                                type="text"
                                name="customer_first_name"
                                value={this.state.activeItem.customer_first_name}
                                onChange={this.handleChange}
                                placeholder="Enter Member First Name"
                                maxLength="200"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="customer_last_name">Last Name</Label>
                            <Input
                                type="text"
                                name="customer_last_name"
                                value={this.state.activeItem.customer_last_name}
                                onChange={this.handleChange}
                                placeholder="Enter Member Last Name"
                                maxLength="200"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="customer_email">Email</Label>
                            <Input
                                type="text"
                                name="customer_email"
                                value={this.state.activeItem.customer_email}
                                onChange={this.handleChange}
                                placeholder="Enter Member Email"
                                maxLength="200"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
          </Button>
                </ModalFooter>
            </Modal>
        );
    }
}