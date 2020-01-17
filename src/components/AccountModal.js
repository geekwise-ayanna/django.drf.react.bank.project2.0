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
    Label,
} from "reactstrap";

export default class AccountModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
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
        console.log(this.state)
        const { toggle, onSave } = this.props;
        console.log("Account: " + this.state.activeItem)
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}> Account Information </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="account_name">Account Name</Label>
                            <Input
                                type="text"
                                name="account_name"
                                value={this.state.activeItem.account_name}
                                onChange={this.handleChange}
                                placeholder="Enter Account Name"
                                maxLength="200"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="account_no">Account No</Label>
                            <Input
                                type="text"
                                name="account_no"
                                value={this.state.activeItem.account_no}
                                onChange={this.handleChange}
                                placeholder="Enter Account No"
                                maxLength="200"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="account_type">Account Type</Label>                            
                            <Input
                                type="text"
                                name="account_type"
                                value={this.state.activeItem.account_type}
                                onChange={this.handleChange}
                                placeholder="Enter credit, checking, or savings(verbatim)"
                                maxLength="200"
                            />
                         
                        </FormGroup>
                        <FormGroup>
                            <Label for="account_balance">Account Balance</Label>
                            <Input
                                type="text"
                                name="account_balance"
                                value={this.state.activeItem.account_balance}
                                onChange={this.handleChange}
                                placeholder="Enter Account Balance"
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