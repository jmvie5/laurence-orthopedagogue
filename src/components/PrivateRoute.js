import React from "react"
import { navigate } from "gatsby"
import { Router } from "@reach/router"
import { isLoggedIn, isBrowser } from "../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (
    !isLoggedIn() &&
    isBrowser &&
    window.location.pathname !== `/login`
  ) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/mon-compte/login`)
    return null
  }

  return (
    <Router>
      <Component {...rest} />
    </Router>
  )
}

export default PrivateRoute