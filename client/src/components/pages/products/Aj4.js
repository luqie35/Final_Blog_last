import React, { Fragment } from "react";

import j4 from "../../../pics/j4.jpg";

const Aj4 = () => {
  return (
    <Fragment>
      <div className='sneaker py-5'>
        <div className='row' />
        <div className='leftcolumn' />
        <div className='img' style={{ height: "300px" }}>
          {" "}
          <img className='left' src={j4} alt='Snow' style={{ width: "60%" }} />
        </div>
        <div className='card'>
          <h1>Air Jordan 4</h1>

          <br />
          <p>
            <h4>
              Lee had featured the shoe in his movie Do The Right Thing. Michael
              Jordan wore the Air Jordan IV when he made "The Shot," a series
              winner in Game 5 of the 1989 NBA First Round between the Chicago
              Bulls and the Cleveland Cavaliers. In 2012 a Cavalier colorway
              dubbed the "Cavs" was released to honor "The Shot."
            </h4>
          </p>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default Aj4;
