import { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./NavMenu.css";

export interface NavMenuProps {}

export interface NavMenuState {
  collapsed: boolean;
  isDarkModeEnabled: boolean;
}

export class NavMenu extends Component<NavMenuProps, NavMenuState> {
  static displayName = NavMenu.name;

  constructor(props: Readonly<NavMenuProps>) {
    super(props);

    this.state = {
      collapsed: true,
      isDarkModeEnabled: false,
    };
  }

  componentDidMount() {
    let sessionValue = localStorage.getItem("darkMode");
    if (
      sessionValue === "true" ||
      (!sessionValue &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      this.toggleDarkMode(true);
    }
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  toggleDarkMode = (checked: boolean) => {
    localStorage.setItem("darkMode", checked ? "true" : "false");
    this.setState({ isDarkModeEnabled: checked }, () => {
      const element = document.body;
      if (checked) {
        element.classList.add("dark-mode");
      } else {
        element.classList.remove("dark-mode");
      }
    });
  };

  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <NavbarBrand tag={Link} to="/">
              <img src="./logo192.png" height="40px" alt="Logo" /> Your YT Stats
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={!this.state.collapsed}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                <NavItem style={{ marginTop: 8 }}>
                  <Switch
                    checked={this.state.isDarkModeEnabled}
                    onChange={this.toggleDarkMode}
                    height={26}
                    checkedIcon={
                      <FontAwesomeIcon
                        icon={faMoon}
                        style={{ marginLeft: 5 }}
                      />
                    }
                    onColor="#cc4b4c"
                    uncheckedIcon={
                      <FontAwesomeIcon
                        icon={faSun}
                        style={{ marginLeft: 10 }}
                      />
                    }
                  />
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">
                    Instructions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/stats">
                    Stats
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/about">
                    About
                  </NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
