import React from "react";


function Navbars() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      <div className="section section-navbars">


        <div id="navbar">
          <div
            className="navigation-example"
            style={{
              backgroundImage: "url(" + require("assets/img/bg7.jpg") + ")"
            }}
          >

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbars;
