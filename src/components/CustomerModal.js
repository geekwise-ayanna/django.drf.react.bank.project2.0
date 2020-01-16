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
            customerItem: this.props.customerItem
        };
    }

    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.name === "name") {
            this.setState({ customerItem: e.target.value })
            value = e.target.value;
        }
        const customerItem = { ...this.state.customerItem, [name]: value };
        this.setState({ customerItem });
    };

    render() {
        const { toggle, onSave } = this.props;
        console.log("Customer: " + this.state.customerItem)
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}> Customer </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="customer_first_name">First Name</Label>
                            <Input
                                type="text"
                                name="customer_first_name"
                                value={this.state.customerItem.customer_first_name}
                                onChange={this.handleChange}
                                placeholder="Enter Customer First Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="customer_last_name">Last Name</Label>
                            <Input
                                type="text"
                                name="customer_last_name"
                                value={this.state.customerItem.customer_last_name}
                                onChange={this.handleChange}
                                placeholder="Enter Customer Last Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="customer_email">Email</Label>
                            <Input
                                type="text"
                                name="customer_email"
                                value={this.state.customerItem.customer_email}
                                onChange={this.handleChange}
                                placeholder="Enter Customer Email"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.branchItem)}>
                        Save
          </Button>
                </ModalFooter>
            </Modal>
        );
    }
}