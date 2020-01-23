import React, { Component } from "react";

export default class ForgotPassword extends Component {
render() {
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
        <form>
            <h3>Reset Password</h3>

            <div className="form-group">
                <label>Email Address</label>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Enter email address"
                />
            </div>

            <button type="button" className="btn btn-primary btn-block" onClick={() => this.onSubmit()}>Submit</button>
        </form>
        </div>
        </div>
        );
    }
}