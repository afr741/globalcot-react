import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";
import Carousel from "./Carousel.js";
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
        </Container>
      </div>
    </>
  );
}

export default BasicElements;
