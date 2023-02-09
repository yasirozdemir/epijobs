import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

const Job = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    <Col xs={1}>
      <Button
        variant="outline-dark"
        className="d-flex justify-content-center align-items-center"
      >
        <BsStarFill />
      </Button>
    </Col>
  </Row>
);

export default Job;
