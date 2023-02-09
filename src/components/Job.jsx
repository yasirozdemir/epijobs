import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiTwotoneLike, AiFillDislike } from "react-icons/ai";

const Job = ({ data }) => (
  <Row
    className="jobCard align-items-center mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`} className="text-dark">
        {data.company_name}
      </Link>
    </Col>
    <Col>
      <a href={data.url} target="_blank" rel="noreferrer" className="text-dark">
        {data.title}
      </a>
    </Col>
    <Col xs={1}>
      <Button
        variant="outline-success"
        className="d-flex justify-content-center align-items-center"
      >
        <AiTwotoneLike />
      </Button>
      <Button
        variant="outline-danger"
        className="d-flex justify-content-center align-items-center"
      >
        <AiFillDislike />
      </Button>
    </Col>
  </Row>
);

export default Job;
