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

    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={() => this.onSubmit()}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}