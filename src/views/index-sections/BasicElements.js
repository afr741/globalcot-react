import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";
import Carousel from "./Carousel.js";
import Carousel1 from "./Carousel1.js"
import Carousel2 from "./Carousel2.js"
import Carousel3 from "./Carousel3.js"
import Tabs from "./Tabs.js";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
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
