import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Jack from "../../../pics/jack.jpg";
import bape from "../../../pics/bape.jpg";
import Sen from "../../../pics/sen.jpg";
import j4 from "../../../pics/j4.jpg";
import darwin from "../../../pics/darwin.jpg";
import aj1 from "../../../pics/aj1.jpg";

const Products = () => {
  return (
    <Fragment>
      <div className='py-5'>
        <div className='heading text-center'>
          <h1 style={{ color: "white  " }}>Sneakers and Apparel</h1>
          <hr className='divider light my-4' />
        </div>
      </div>

      <div className='p-wrapper py-5'>
        <div className='row'>
          <div className='column'>
            <div className='card text-center' style={{ width: "18rem" }}>
              <div className='card-body'>
                <img src={Sen} alt='Avatar' style={{ width: "100%" }} />
              </div>

              <h5 className='card-title'>
                <b>AIRMAX SENSATION</b>
              </h5>

              <Link to='/sensation' className='btn btn-primary'>
                ABOUT..
              </Link>
            </div>
          </div>
          <div className='column'>
            <div className='card text-center' style={{ width: "18rem" }}>
              <div className='card-body'>
                <img src={darwin} alt='Avatar' style={{ width: "100%" }} />
              </div>

              <h5 className='card-title'>
                <b>AIRMAX DARWIN</b>
              </h5>

              <Link to='/darwin' className='btn btn-primary'>
                ABOUT..
              </Link>
            </div>
          </div>

          <div className='column'>
            <div className='card text-center' style={{ width: " 18re" }}>
              <div className='card-body'>
                <img src={Jack} alt='Avatar' style={{ width: "100%" }} />
              </div>

              <h5 className='card-title'>
                <b>Nike Windrunner </b>
              </h5>

              <Link to='/jacket' className='btn btn-primary'>
                ABOUT..
              </Link>
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <div className='card text-center' style={{ width: " 18re" }}>
                <div className='card-body'>
                  <img src={j4} alt='Avatar' style={{ width: "100%" }} />
                </div>
                <h5 className='card-title'>
                  <b>Air Jordan 4</b>
                </h5>
                <Link to='/aj4' className='btn btn-primary'>
                  ABOUT..
                </Link>
              </div>
            </div>

            <div className='column'>
              <div className='card text-center' style={{ width: " 18re" }}>
                <div className='card-body'>
                  <img src={bape} alt='Avatar' style={{ width: "80%" }} />
                </div>
                <h5 className='card-title'>
                  <b>BAPE® HOODIE </b>
                </h5>
                <Link to='/bape' className='btn btn-primary'>
                  ABOUT..
                </Link>
              </div>
            </div>
            <div className='column'>
              <div className='card text-center' style={{ width: " 18re" }}>
                <div className='card-body'>
                  <img src={aj1} alt='Avatar' style={{ width: "100%" }} />
                </div>
                <h5 className='card-title'>
                  <b>Air Jordan 1</b>
                </h5>
                <Link to='/aj1' className='btn btn-primary'>
                  ABOUT..
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
