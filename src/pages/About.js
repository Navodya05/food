import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        The Pizza Factory is all about fun and good times with people you care about, sharing original Italian pizza, hand-made in the traditional Italian way: thin & crispy, and deliciously baked in the only original wood-fired oven in Sri Lanka, along with a tasty range of authentic Italian food with carefully-sourced fresh ingredients sourced and imported from Italy, is ought to have your tastebuds craving for more, after one bite.

We hope you’ll try our menu, crafted with care to deliver great value and our signature Loveable pure Italian Taste. Enjoy the Pizza Factory Pizza’s at home, or at one of our newly established restaurants to have an authentic Italian Pizza experience. See you soon!


        </p>
      </div>
    </div>
  );
}

export default About;
