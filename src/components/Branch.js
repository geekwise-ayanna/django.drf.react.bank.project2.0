import BranchModal from "./BranchModal";
import React, { Component } from "react";
import axios from "axios";

class Branch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewCompleted: false,
            activeItem: {
                branch_name: "",
                branch_location: "",
            },
            todoList: []
        };
    }
    componentDidMount() {
        this.refreshList();
    }
    refreshList = () => {
        axios
            .get("https://ayanna-backend-staging.herokuapp.com/api/branch/")
            .then(res => this.setState({ todoList: res.data }))
            .catch(err => console.log(err));
    };
    displayCompleted = status => {
        if (status) {
            return this.setState({ viewCompleted: true });
        }
        return this.setState({ viewCompleted: false });
    };
    renderTabList = () => {
        return (
            <div className="my-5 tab-list">
                <span
                    onClick={() => this.displayCompleted(true)}
                    className={this.state.viewCompleted ? "active" : ""}
                >
                    Branch
            </span>
            </div>
        );
    };
    renderItems = () => {
        const newItems = this.state.todoList
        return newItems.map(item => (
            <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
            >
                <span
                    className={`todo-title mr-2 ${
                        this.state.viewCompleted ? "" : ""
                        }`}
                    title={item.branch_name}
                >
                    {item.branch_name}<br />{item.branch_location}
                </span>
                <span>
                    <button
                        onClick={() => this.editItem(item)}
                        className="btn btn-secondary mr-2"
                    >
                        {" "}
                        Edit{" "}
                    </button>
                    <button
                        onClick={() => this.handleDelete(item)}
                        className="btn btn-danger"
                    >
                        Delete{" "}
                    </button>
                </span>
            </li>
        ));
    };
    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };
    handleSubmit = item => {
        this.toggle();
        if (item.id) {
            axios
                .put(`https://ayanna-backend-staging.herokuapp.com/api/branch/${item.id}/`, item)
                .then(res => this.refreshList());
            return;
        }
        axios
            .post("https://ayanna-backend-staging.herokuapp.com/api/branch/", item)
            .then(res => this.refreshList());
    };
    handleDelete = item => {
        axios
            .delete(`https://ayanna-backend-staging.herokuapp.com/api/branch/${item.id}`)
            .then(res => this.refreshList());
    };
    createItem = () => {
        const item = { branch_name: "", branch_location: "" };
        this.setState({ activeItem: item, modal: !this.state.modal });
    };
    editItem = item => {
        this.setState({ activeItem: item, modal: !this.state.modal });
    };
    render() {
        return (
            <main className="content">
                <div className="row ">
                    <div className="col-md-6 col-sm-10 mx-auto p-0">
                        <div className="card p-3">
                            <div className="">
                                <button onClick={this.createItem} className="btn btn-primary">
                                    Add
                    </button>
                            </div>
                            {this.renderTabList()}
                            <ul className="list-group list-group-flush">
                                {this.renderItems()}
                            </ul>
                        </div>
                    </div>
                </div>
                {this.state.modal ? (
                    <BranchModal
                        activeItem={this.state.activeItem}
                        toggle={this.toggle}
                        onSave={this.handleSubmit}
                    />
                ) : null}
            </main>
        );
    }
}
export default Branch;