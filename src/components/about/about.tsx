import React from "react";

const About = () => (
  <div className="content">
    <div className="title">About</div>
    <p>
      Gör en applikation som använder Rebrickable LEGO API:et. Du kan använda
      den API nyckel som specificeras längre ner.
    </p>

    <p>
      Applikationen skall ge användaren en dropdown som skall innehålla alla
      Lego Themes från themes APIet. När användaren väljer ett theme i dropdown
      komponenten så skall alla LEGO sets med detta theme presenteras i en lista
      (man kan querya sets APIet med ett theme ID). Man skall sen kunna klicka
      in på ett set för att se detaljer och ett screenshot om det specifika lego
      settet.
    </p>

    <p>
      Man skall även kunna “gilla” ett set i detaljvyn. Gillade set skall sedan
      markeras på något sätt i listvyn. Gilla statusen kan sparas i ett lokalt
      state i appen (inget behov för databas eller session state eller
      liknande).
    </p>
  </div>
);

export default About;
