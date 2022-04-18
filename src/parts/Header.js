import React from "react";
import IconText from "./IconText";
import Button from "../elements/Button";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    // return props.location.pathname === path ? "active" : "";
  };

  return (
    <header className="spacing-sm ">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-brand">
            <IconText />
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item active ${getNavLinkClass("/")}`}>
                <Button className="nav-link " type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                <Button className="nav-link" type="link" href="/browse-by">
                  Browse by
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                <Button className="nav-link" type="link" href="/stories">
                  stories
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                <Button className="nav-link" type="link" href="/agents">
                  agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
