import React, { Component } from "react";
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
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };

    render() {
        return (
            <form>
                <h3>Sign In</h3>

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
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password"
                        value={this.state.activeItem.password}
                        onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="button" className="btn btn-primary btn-block" onClick={() => this.onSubmit()}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}