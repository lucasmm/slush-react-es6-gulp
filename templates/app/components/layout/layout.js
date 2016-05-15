import React from 'react';
import { Link } from 'react-router';

class Layout extends React.Component{
  render(){
    return (<div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#"><%= appName %></a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><Link to="/">Home</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">{this.props.children}</div>
    </div>);
  }
}

module.exports = Layout;
