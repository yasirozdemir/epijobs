import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getJobData } from "../redux/actions";
import Job from "./Job";

const MainSearch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const jobs = useSelector((state) => state.job.jobs[0]);
  console.log("jobs", jobs);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobData(query));
  };

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="d-flex justify-content-between align-items-center mx-auto my-3"
        >
          <h1>Remote Jobs Search</h1>
          <Button
            variant="primary"
            className="d-flex justify-content-center align-items-center px-2"
            onClick={() => navigate("/favorites")}
          >
            <AiFillStar />
          </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData, index) => (
            <Job key={jobData._id} data={jobData} index={index} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
