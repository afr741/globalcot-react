/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
        </nav>
        <div className="copyright" id="copyright">
         
          {`Dubai, UAE. Globalcot © ${new Date().getFullYear()}`}
         
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
