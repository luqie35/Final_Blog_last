import React, { Fragment } from "react";

import darwin from "../../../pics/darwin.jpg";

const Darwin = () => {
  return (
    <Fragment>
      <div className='sneaker py-5'>
        <div className='row' />
        <div className='leftcolumn' />
        <div className='card'>
          <h1>Airmax Darwin</h1>
          <div className='img' style={{ height: "300px" }}>
            {" "}
            <img
              className='left'
              src={darwin}
              alt='Snow'
              style={{ width: "40%" }}
            />
          </div>
          <br />
          <p>
            <h4>
              Dennis Rodman’s signature kicks is making comeback, the classic
              basketball silhouette originally dropped in 1994, when Rodman
              played for the San Antonio Spurs. These classic kicks retrod in
              2018 returns in true hardcourt style with a high-cut silhouette,
              speed lacing, full-length rubber in a cupsole design features a
              rugged traction pattern on the bottoms. Only contrast comes on the
              lateral ankles and the tongue with the addition of fresh white
              Nike branding.
            </h4>
          </p>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default Darwin;
