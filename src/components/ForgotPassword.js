import React, { Component } from "react";
// import Axios from "axios";



export default class Login extends Component {
render() {
    return (
        <form>
            <h3>Forgot Password?</h3>

            <div className="form-group">
                <label>Email Address</label>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Enter email associated with account"
                />
            </div>

            <button type="button" className="btn btn-primary btn-block" onClick={() => this.onSubmit()}>Reset Password</button>

        </form>
        );
    }
}