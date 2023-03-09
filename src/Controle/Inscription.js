import React from "react";

class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: "",
      message: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ message: "Le mot de passe saisi ne correspond pas au mot de passe confirmé." });
    } else {
      this.setState({ message: "Bienvenue", messageColor: "green" });
    }
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleConfirmPasswordChange = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmer le mot de passe :</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPasswordChange}
          />
        </div>
        <button type="submit">Valider</button>
        <div style={{ color: this.state.messageColor }}>{this.state.message}</div>
      </form>
    );
  }
}

export default Inscription;