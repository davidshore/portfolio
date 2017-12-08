import React from "react"
import "./style.css"

export default class ProjectPreview extends React.Component {

  render() {
    return (
      <a href="" className="ProjectPreview">
        <div className="inner">
          <h1>{this.props.name}</h1>

          <div className="description">
            {this.props.description}
          </div>
        </div>
      </a>
    )
  }

}
