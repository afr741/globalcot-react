import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import BasicElements from "../index-sections/BasicElements.js"


function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState( '');




  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };

  });


  function sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'shaunvoner_gmail_com',templateId,variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }



  function  handleSubmit (event) {
	   const templateId = 'template_rlmA2HvN';
	   sendFeedback(templateId, {message_html: message, from_name: name, reply_to: email});
     alert('Thank you! The message has been emailed!');
  }




  return (
    <>

      <div className="wrapper" id = "ResourcesSec">
        <div className="section section-about-us">
          <Container >
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Resources</h2>
                <h5 className="description">
                Worldwide Globalcot has team members operating on the international level. All these people have the same goal - satisfaction of the customers.     </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/groupphoto1.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "A satisfied customer is the best business strategy of all" <br></br>
                      <br></br>
                      <small>-Michael LeBoeuf</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/cottonroll.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/cottonstorage.jpg") + ")"
                    }}
                  ></div>


                  <p>
                    For the better servicing to the Customers we uninterruptedly developing more efficient ways of reaching them. From our branches we coordinate marketing in China, India, Pakistan, Bangladesh and some EU countries. The world is moving forth and free trade has greater emphasize over the trade controlled by centralized governmental agencies. We will help our public and privet sector partners in adjusting to changes.
                  </p>
                  <p>
                    Globalcot Company offers complete chain of support in finance, logistics, risk management, quality assurance and etc. We save the money of our customers through use of modern financing structures and risk management plans which are unavailable in traditional banking.
                  </p>
                  <h3>Logistics</h3>
                  <p>
                    Globalcot is a multi sector Company which in general supports agriculture, realty and media business. Our Company is established relatively not long ago. At the present, Globalcot has 30 partners-agencies all over the world, which are formally independent companies.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

      <BasicElements />



        <div id = "contactSec" className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Fill the form bellow and we will contact you promptly</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                    onChange = {e => setName(e.target.value) }
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                    onChange = {e=>setEmail(e.target.value)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    onChange = {e=>setMessage(e.target.value)}
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={handleSubmit}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
