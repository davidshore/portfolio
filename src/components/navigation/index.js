import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Navigation extends React.Component {

  render() {
    return (
      <nav className="Navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About me</Link>
        
      </nav>
    )
  }

}
