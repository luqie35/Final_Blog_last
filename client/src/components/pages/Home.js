import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <Fragment>
      <div className='container'></div>
      <div className='centered'>
        <h1 style={{ color: "#00FFE0 " }}>StreetwearKnowledge</h1>
        <hr className='divider light my-4' />
        <h4 style={{ color: "white" }}>Knowledge is power..</h4>

        <div className=' text-center'>
          <Link to='/products' className='btn btn-primary'>
            Blog Items
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default home;
