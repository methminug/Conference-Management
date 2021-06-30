import React from "react";
import "./login.css";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import { connect } from "react-redux";
import { loginUserAcc } from "../actions/userLoginAction";
import _ from "lodash";

let formData = {};
let initlState = {
    userName: "",
    password: "",
    isFormInvalid: false,
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = initlState;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.loginuser !== nextProps.loginuser) {
            if (nextProps.loginuser.username !== null) {
                NotificationManager.success("Login successful");
                localStorage.setItem("user_id", nextProps.loginuser.user_id);
                localStorage.setItem("username", nextProps.loginuser.username);
                localStorage.setItem("role", nextProps.loginuser.role);
                window.location = "/home";
            } else {
                NotificationManager.error("Error with login");
            }
        }

        if (this.props.loginuserError !== nextProps.loginuserError) {
            if (nextProps.loginuserError && nextProps.loginuserError.name) {
                if (_.isEqual(nextProps.loginuserError.name, "Error")) {
                    NotificationManager.warning("Credentials are not valid");
                    localStorage.removeItem("user_id");
                    localStorage.removeItem("username");
                    localStorage.removeItem("role");
                }
            }
        }
    };

    validateForm() {
        const data = {
            username:
                this.state.userName && this.state.userName.trim().length > 0
                    ? this.state.userName
                    : null,
            password:
                this.state.password && this.state.password.trim().length > 0
                    ? this.state.password
                    : null,
        };
        formData = Object.assign({}, data);
        return true;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let data = Object.values(formData).map((key) => {
                return key !== null;
            });

            if (!data.includes(false)) {
                let login = {
                    username: this.state.userName,
                    password: this.state.password,
                };
                console.log("DATA To SEND", login);
                this.props.loginUserAcc(login);
            } else {
                this.setState({ isFormInvalid: true });
                NotificationManager.warning("Please fill input fields");
            }
        }
    }

    render() {
        return (
            <div class="center">
                <h1>Login</h1>
                <div class="form">
                    <div class="txt_field">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="userName"
                            onChange={this.onChange}
                            value={this.state.userName}
                        />
                        {formData.username === null &&
                        this.state.isFormInvalid ? (
                            <span className="text-danger validation-text p-0">
                                Username is required
                            </span>
                        ) : null}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password" className="form-text">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={this.onChange}
                            value={this.state.password}
                        />
                        {formData.password === null &&
                        this.state.isFormInvalid ? (
                            <span className="text-danger validation-text p-0">
                                Password is required
                            </span>
                        ) : null}
                    </div>
                    <div className="d-flex justify-content-center">
                        <a
                            className="btn btn-primary btn-block"
                            href="#!"
                            role="button"
                            onClick={this.onSubmit}
                        >
                            Login
                        </a>
                    </div>
                </div>
                <NotificationContainer />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loginuser: state.userReducer.loginuser,
    loginuserError: state.userReducer.loginuserError,
});

const mapDispatchToProps = (dispatch) => ({
    loginUserAcc: (user) => {
        dispatch(loginUserAcc(user));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
