import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Fragment>
      <div className='card'>
        <div className='about' id='about'>
          <h1 style={{ color: "#0CB095" }}>StreetwearKnowledge</h1>
          <hr className='divider light my-4' />
          <div className='card-body'>
            <h4 style={{ color: "#E5F400 " }}>Established 2020</h4>
            <p className='card-text' style={{ color: "#4F4F4F" }}>
              <h4 style={{ color: "white " }}>
                We are a well established SA site that provides information and
                history behind Streetwear Apparel and Sneakers. We take pride in
                providing history and modern information on sneakers and clothes
                that not everyone is aware of in today's time. We'll take you
                back in time to where it originated from and the history behind
                it. We mostly specialize in sneakers that vary from old kicks
                you will not see around, all the way to the modern, designer and
                hypebeast items we have in today's era.
              </h4>
            </p>
            <Link to='/products' className='btn btn-primary'>
              Blog Items
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
