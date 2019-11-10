import React from "react";
import Form from "./Form";

import 'bootstrap/dist/css/bootstrap.min.css';

class LogIn extends Form {

    render() {
        console.log("Logged in?", this.loggedIn());

        if (this.loggedIn()) {
            return <h2>A user is logged in.</h2>
        }
        else {
            return (
                <div className="col-lg-6">
                    <h2>Log In</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Email: </label>
                            <input id="email" name="email" type="text" className="form-control" placeholder="Your email" required />
                        </div>

                        <div className="form-group">
                            <label>Password: </label>
                            <input id="password" name="password" type="password" className="form-control" placeholder="Your password" required />
                        </div>

                        <div className="form-group">
                            <input type="submit" name="submit" value="Log In" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            );
        }
    }

    /**
     * Redirects to login page upon a successful post creation
     * 
     * TODO maybe redirect to profile page? Fail condition as well
     */
    onSuccessResponse(xhr) {
        if (xhr.response === "Login Successful") {
            // window.location.pathname = "/";
            console.log(xhr.response);
        }
        else {
            alert(xhr.response);
        }
    }
}

export default LogIn;
