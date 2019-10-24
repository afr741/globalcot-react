import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="7">
              <p className="category">Our Services</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        Storage Services
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons business_money-coins"></i>
                        Financing farms
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons loader_gear"></i>
                        Processing Seeds
                      </NavLink>
                    </NavItem>

                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                        The Company has a capacity for storing about 10 thousand tons of cotton fiber, each year we sale approximately 30-40 thousand tons of cotton fiber.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                      Globalcot supports cotton growers and at the same time put efforts to increase the efficiency of the farms in order to supply competitive and quality goods to world market.
+ Learn More
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                      Quality control of supplied cotton fiber has a special priority for the Company.
+ Learn More
                      </p>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
