import React, { Fragment } from "react";

import aj1 from "../../../pics/aj1.jpg";

const Aj1 = () => {
  return (
    <Fragment>
      <div className='sneaker py-5'>
        <div className='row' />
        <div className='leftcolumn' />
        <div className='img' style={{ height: "300px" }}>
          {" "}
          <img className='left' src={aj1} alt='Snow' style={{ width: "60%" }} />
        </div>
        <div className='card'>
          <h1>Air Jordan 1</h1>

          <br />
          <p>
            <h4>
              Designer : Peter Moore | Released : 1985 | This Air Jordan was the
              only one in the series to feature the familiar Nike Swoosh logo.
              And predating the Jumpman logo, the OG shoe featured the Wings
              logo - a basketball with wings stretching from both sides and "Air
              Jordan" printed above the ball. Nike filed the Wings logo as a
              trademark on May 7, 1985. Leather overlays on the upper offered
              durability and easy color blocking, and a perforated leather toe
              box lent ventilation.
            </h4>
          </p>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default Aj1;
