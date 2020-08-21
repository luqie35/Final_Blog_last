import React, { Fragment } from "react";

import Sen from "../../../pics/sen.jpg";

const Sensation = () => {
  return (
    <Fragment>
      <div className='sneaker py-5'>
        <div className='row' />
        <div className='leftcolumn' />
        <div className='card'>
          <h1>Nike AirMax Sensation</h1>
          <div className='img' style={{ height: "300px" }}>
            {" "}
            <img
              className='left'
              src={Sen}
              alt='Snow'
              style={{ width: "40%" }}
            />
          </div>
          <br />
          <p>
            <h4>
              Inspired By The OG Air Max 1 Originally Webber’s first signature
              sneakers, Two classic pair's you never correlated with each other
              before, pairs up and they definitely brings heat to your feet,
              With Inspiration of the iconic OG Air Max 1 colorway
            </h4>
          </p>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default Sensation;
