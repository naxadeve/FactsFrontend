import React from "react";
import ParticleJsImg from "./ParticleJsImg";
import ParticleJsText from "./ParticleJsText";

const FirstMain = ({siteapi}) => (
  // <div className="background-wrap">

  <section className="banner is-bg">
    <ParticleJsImg />
    <div className="container">
      <ParticleJsText siteapi={siteapi} />
      {/* <HeaderText />
        <HeaderImg /> */}
    </div>
  </section >
  // </div>

);

export default FirstMain;
