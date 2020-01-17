import React, { Component } from "react";
import Axios from "axios";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: {
                'username': "",
                'email': "",
                'password': ""
            }
        };
    }

    onSubmit() {
        console.log(this.state.activeItem)
        Axios
            .post("http://localhost:8000/users/api/auth/register", this.state.activeItem)
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
            <form>
                <h3>Sign Up</h3>

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
                    <label>Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={this.state.activeItem.email}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password"
                        value={this.state.activeItem.password}
                        onChange={this.handleChange} />
                </div>

                <button type="button" className="btn btn-primary btn-block" onClick={() => this.onSubmit()} >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <a href="#">Sign in here.</a>
                </p>
            </form>
        );
    }
}