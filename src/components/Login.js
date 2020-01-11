import React, { Component } from "react";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";
import Axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: {
                'username': "",
                'password': ""
            }
        };
    }

    onSubmit() {
        console.log(this.state.activeItem)
        Axios
            .post("http://localhost:8000/users/api/auth/login", this.state.activeItem)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };
    render() {
        const { toggle, onSave } = this.props;
        return (
        <div>
                    <Form>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input
                                type="text"
                                name="username"
                                onChange={this.handleChange}
                                placeholder="Enter username"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                onChange={this.handleChange}
                                placeholder="Enter Password"
                            />
                        </FormGroup>
                    </Form>
                    <Button color="success" onClick={() => this.onSubmit()}>
                        Save
              </Button>
        </div>
        );
    }
}