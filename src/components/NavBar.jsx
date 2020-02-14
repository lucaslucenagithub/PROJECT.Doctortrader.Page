import React, { Component } from "react";

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  render() {

    const show = (this.state.menu) ? "show" : "";
    const logo = '';

    return (

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top"><img id='navLogo' class='center' src={require('../assets/img/logo.png')} alt='logo'></img></a>
          <button className="navbar-toggler navbar-toggler-right" type="button" onClick={this.toggleMenu}
            data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
            aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fa fa-bars"></i>
          </button>
          <div className={"collapse navbar-collapse " + show} id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#subServices">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#cursos">Cursos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">Funcionamento</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">Recomendações</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Participar</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}