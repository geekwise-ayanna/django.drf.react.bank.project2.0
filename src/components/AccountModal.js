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

export default class AccountModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountItem: this.props.accountItem
        };
    }
    render() {
        const { toggle, onSave } = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}> Account </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="account_name">Account Name</Label>
                            <Input
                                type="text"
                                name="account_name"
                                value={this.state.accountItem.name}
                                onChange={this.handleChange}
                                placeholder="Enter Account Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="account_no">Account No</Label>
                            <Input
                                type="text"
                                name="account_no"
                                value={this.state.accountItem.account_no}
                                onChange={this.handleChange}
                                placeholder="account_no"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="account_type">Account Type</Label>
                            <Input
                                type="text"
                                name="account_type"
                                value={this.state.accountItem.account_type}
                                onChange={this.handleChange}
                                placeholder="account_type"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="account_balance">Account Balance</Label>
                            <Input
                                type="text"
                                name="account_balance"
                                value={this.state.accountItem.account_balance}
                                onChange={this.handleChange}
                                placeholder="Enter Account Balance"
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