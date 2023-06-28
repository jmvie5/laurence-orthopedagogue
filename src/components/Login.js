import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

class Login extends React.Component {
  handleSubmit = () => handleLogin(user => navigate(`/mon-compte/profile`))
  render() {
    return (
      <>
        <button onClick={this.handleSubmit}>Connection</button>
      </>
    )
  }
}

export default Login