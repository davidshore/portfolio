import React from "react"
import ProjectPreview from "components/project-preview"
import projects from "data/projects"
import "./style.css"

export default class HomePage extends React.Component {

  render() {
    return (
      <div className="HomePage">
        <h1 className="title">My Super Cool Portfolio</h1>

        <div className="projects">
          {projects.map(project => (
            <ProjectPreview
              key={project.id}
              name={project.name}
              description={project.description} />
          ))}
        </div>
      </div>
    )
  }

}
