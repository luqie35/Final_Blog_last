import React, { Fragment } from "react";

import bape from "../../../pics/bape.jpg";

const Bape = () => {
  return (
    <Fragment>
      <div className='sneaker py-5'>
        <div className='row' />
        <div className='leftcolumn' />
        <div className='card'>
          <h1>Bape Anniversary Hoodie</h1>
          <div className='img' style={{ height: "300px" }}>
            {" "}
            <img
              className='left'
              src={bape}
              alt='Snow'
              style={{ width: "40%" }}
            />
          </div>
          <br />
          <p>
            <h4>
              10th anniversary of the birth of our "SHARK HOODIE". The fastener
              up to the top of the hood and once zipped up seems to mutate into
              a "monster". This item, seemingly bizarre and foreign at the time
              of its debut in 2004 was extremely different from anything else in
              the collection. This odd item received strong support from highly
              sensitive artists and creators, which gradually led to the item
              becoming one of Bape's staple items. For the 10th anniversary, the
              Shark Hoodie is like never before, decorated with Swarovski
              crystals and comes in a special edition box.
            </h4>
          </p>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default Bape;
