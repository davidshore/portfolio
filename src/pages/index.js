import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Navigation from "components/navigation"

import Home from "./home"
import About from "./about"
import Project from "./project"

class MainPage extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />

          <div className="page">
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects/:id" component={Project} />
          </div>
        </div>
      </BrowserRouter>
    )
  }

}

export default MainPage
