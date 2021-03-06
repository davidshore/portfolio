import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class ProjectPreview extends React.Component {

  render() {
    return (
      <Link to={`/projects/${this.props.url}`} className="ProjectPreview">
        <div className="inner">
          <h1>{this.props.name}</h1>

          <div className="description">
            {this.props.description}
          </div>
        </div>
      </Link>
    )
  }

}
