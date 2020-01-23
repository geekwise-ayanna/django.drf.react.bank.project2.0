import React, { Component } from "react";
import Axios from "axios";

export default class ForgotPassword extends Component {
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
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };

    render() {
        return (
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form>
            <h3>Reset Password</h3>

            <div className="form-group">
                <label>User Name</label>
                <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter user name"
                    value={this.state.activeItem.username}
                    onChange={this.handleChange}
                />
            </div>

            <div className="form-group">
                <label>New Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter new password"
                    value={this.state.activeItem.password}
                    onChange={this.handleChange}
                />
            </div>

            <button type="button" className="btn btn-primary btn-block" onClick={() => this.onSubmit()}>Submit</button>
        </form>
        </div>
        </div>
        );
    }
}