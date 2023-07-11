import React from "react";
import "./Section2.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Section2() {
  return (
    <Container fluid className="section2">
      <Row className="reverse-lg">
        <Col lg="6" className="m">
          <div className="text-left font-medium pl-12 pr-6 py-3 lg:max-w-fit w-fit mt-10 bg-white rounded-full shadow-lg relative customer-btn mx-auto">
            Customers' Needs Above All Else
            <div className="elementor-icon absolute left-5 top-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
              >
                <path
                  className="mt-auto"
                  d="M5.367 2.36968L0.839844 4.01463V8.20995C0.839844 12.0213 0.849325 12.4479 0.925172 12.9457C1.27597 15.1785 2.17192 16.9277 3.7979 18.5395C4.76496 19.5018 5.7652 20.2223 7.09727 20.9144C8.09751 21.4359 9.57654 22 9.93208 22C10.1122 22 11.2025 21.6302 11.814 21.36C13.3879 20.6679 14.7863 19.7578 15.8909 18.6959C17.7207 16.9419 18.7541 14.8134 18.9722 12.3294C19.0054 11.9407 19.0196 10.419 19.0101 7.87338L18.9959 4.00989L14.4687 2.36494C11.98 1.45951 9.93208 0.719999 9.91786 0.719999C9.90364 0.719999 7.85575 1.45951 5.367 2.36968ZM14.4924 8.34743L15.0139 8.86888L11.705 12.1777L8.4009 15.4818L6.61374 13.6947L4.82658 11.9075L5.35752 11.3719L5.88845 10.8362L7.14468 12.0924L8.4009 13.3486L11.1646 10.5849C12.6816 9.06798 13.933 7.82597 13.9473 7.82597C13.9615 7.82597 14.208 8.063 14.4924 8.34743Z"
                  fill="#1962F2"
                ></path>
              </svg>
            </div>
          </div>
          <h1 className=" hedding mt-5 ml-10 rt-title-heading text-black lg:text-4xl text-3xl font-semibold text-capitalize font-jakarta-sans leading-10 ">
            Take Control <br />{" "}
            <span className="redHedding">Monitor Usage & Change Filters</span>{" "}
            <br /> No Technician Needed
          </h1>
          <div className="text mt-4 ml-10 ">
            We have crafted a product that addresses the real frustrations of a
            customer. The first step is to ensure there are zero service delays.
          </div>

          <div className=" ml-10 points">
            <div class="check-icon  mt-1 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z"
                  fill="#39C69B"
                ></path>
              </svg>
            </div>
            <div>
              <div className="hedding">
                <h2 class="text-xl mt-1 lg:w-full  mb-3 font-bold font-plusJakartaSans capitalize text-gray-800 hedding2">
                  Smart Water Purifier With Self Servicing Capability
                </h2>
                <p class="font-normal font- text-base leading-relaxed text-gray-600  lg:pr-0">
                  Say goodbye to the hassle of scheduling a technician for
                  purifier maintenance with our
                  <span class="font-semibold "> self-replacing </span> filters.
                </p>
              </div>
            </div>
          </div>
          <div className=" ml-10 points">
            <div class="check-icon  mt-1 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z"
                  fill="#39C69B"
                ></path>
              </svg>
            </div>
            <div>
              <div className="hedding">
                <h2 class="text-xl mt-1 lg:w-full  mb-3 font-bold font-plusJakartaSans capitalize text-gray-800 hedding2">
                  Compensation For Service Delays
                </h2>
                <p class="font-normal font- text-base leading-relaxed text-gray-600  lg:pr-0">
                  You are entitled to a compensation of
                  <span class="font-semibold "> 100 Rs/Day </span> if service is
                  delayed for more than 24 hours.
                </p>
              </div>
            </div>
          </div>
          <button class=" button mt-3 rounded-full bg-blue-500   flex m-auto mt-6 lg:mt-2 md:mb-14">
            <a class="rt-readmore-btn text-white font-medium mx-auto no-underline ">
              Next: Smart Water Conservation
            </a>
          </button>
        </Col>
        <Col lg="6">
          <img
            src="https://ik.imagekit.io/aq3ybtarw/landing/water-lg.webp?updatedAt=1684088939335"
            alt="hero"
            className="object-cover relative object-center rounded transition-transform duration-300 ease-in-out hover:-translate-y-2 max-w-full cursor-pointer w-full sm:pr-4 customer-image"
          ></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Section2;
