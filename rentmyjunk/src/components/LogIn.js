import React from "react";
import Form from "./Form";

class LogIn extends Form {
  render() {
    return (
      <div class="col-lg-3 offset-2">
        <h2>Log in</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              id="username"
              name="username"
              type="text"
              className="form-control"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              id="password"
              name="password"
              type="password"
              rows="5"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              name="submit"
              value="Log in"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
