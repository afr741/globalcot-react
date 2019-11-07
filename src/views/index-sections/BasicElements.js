import React from "react";

import Carousel from "./Carousel.js";
import Carousel1 from "./Carousel1.js"
import Carousel2 from "./Carousel2.js"
import Carousel3 from "./Carousel3.js"
// reactstrap components
import {
  Container

} from "reactstrap";

// core components

function BasicElements() {

  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          <h3 className="title">Locations</h3>
          <Carousel/>
          <Carousel1/>
          <Carousel2/>
          <Carousel3/>
        </Container>
      </div>
    </>
  );
}

export default BasicElements;
