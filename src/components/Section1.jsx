import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Section1.scss";

function Section1() {
  return (
    <Container className="section1" fluid>
      <Row>
        <Col lg="6">
          <div className="part1 ">
            <img
              src="https://ik.imagekit.io/aq3ybtarw/landing/mobile-landing.webp?updatedAt=1680626119244"
              alt="hero-img"
              fetchpriority="high"
              className="my-custom-class flex m-auto"
              width="550"
              loading="lazy"
            />
          </div>
        </Col>
        <Col lg="6">
          <div className="part2">
            <h1 className="hedder">
              Gauge Water Purifier
              <div className="letters">Puts An End</div>
              To RO Service Pain
            </h1>
            <p className="mb-12 px-4 md:px-16 lg:px-0 lg:mx-3 leading-relaxed text-center font-medium text-base md:text-lg lg:text-xl max-w-2xl customer-para-one">
              Fully automatic water purifier provides the highest water savings
              while ensuring a seamless service experience.
            </p>
            <div className="buttonBody">
              <button className="button inline-flex text-white focus:outline-none border-0 rounded-full bg-blue-500 hover:bg-blue-600 py-4 lg:py-5 px-12 mb-7 text-base font-semibold">
                Take a product Tour
              </button>
            </div>
            <p className="leading-relaxed text-center font-medium text-base mt-4 customer-para-two">
              Experience Convenience Like Never Before With Our Smart Water
              Purifier
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section1;
