import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Button, TextField } from "@material-ui/core";
import { withRouter } from "./utils";
import axios from "axios";
import bcrypt from "bcryptjs";

var salt = bcrypt.genSaltSync(10);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {
    const pwd = bcrypt.hashSync(this.state.password, salt);

    axios
      .post("http://localhost:2000/login", {
        username: this.state.username,
        password: pwd,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.id);
        this.props.navigate("/home");
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.errorMessage) {
          swal({
            text: err.response.data.errorMessage,
            icon: "error",
            type: "error",
          });
        }
      });
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-indigo-500">
        <div className="text-2xl font-bold text-white mb-8">Login</div>

        <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
          <TextField
            type="text"
            autoComplete="off"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="User Name"
            required
            className="mb-4 px-4 py-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
          />
          <TextField
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
            className="mb-6 px-4 py-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
          />
          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username === "" || this.state.password === ""}
            onClick={this.login}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
