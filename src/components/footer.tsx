import classNames from "classnames";
import React from "react";

function footer() {
  return (
    <div className="columns">
      <div className="column">
        <div className="subtitle">Tech stack</div>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>FlexBox</li>
          <li>SASS</li>
          <li>Bulma</li>
        </ul>
      </div>
      <div className="column">
        <div className="subtitle">Why?</div>
        <div>
          This webpage was developed as coding test show of JavaScript
          capabilities and to test and get to know React.
        </div>
        <div>
          The task is from <a href="https://www.newdefault.se/">New Default</a>{" "}
          and carried out by{" "}
          <a href="https://www.linkedin.com/in/henrik-nilsson-harnert-016016150/">
            Henrik Nilsson Harnert
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default footer;
