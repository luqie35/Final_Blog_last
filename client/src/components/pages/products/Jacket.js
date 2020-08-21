import React, { Fragment } from "react";

import Jack from "../../../pics/jack.jpg";

const Jacket = () => {
  return (
    <Fragment>
      <div className='sneaker py-5'>
        <div className='row' />
        <div className='leftcolumn' />
        <div className='card'>
          <h1>Nike windrunner modernized</h1>
          <div className='img' style={{ height: "300px" }}>
            {" "}
            <img
              className='left'
              src={Jack}
              alt='Snow'
              style={{ width: "40%" }}
            />
          </div>
          <br />
          <p>
            <h4>
              Bred in the late ’70s, Nike’s Windrunner was immediately defined
              by its chevron stripe detail, which has effectively been “turned
              off” for the SS20 season. The brand has swapped the classic
              pattern for more modernized takes, opting to lean on geometric
              layouts with the help of vivid ’80s-style colorblocking.
            </h4>
          </p>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default Jacket;
