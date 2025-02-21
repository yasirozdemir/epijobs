import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getJobData, SET_JOB_DATA } from "../redux/actions";
import Job from "./Job";

const MainSearch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const jobs = useSelector((state) => state.job.jobData);

  const isLoading = useSelector((state) => state.job.isLoadingJob);
  const isError = useSelector((state) => state.job.isErrorJob);

  useEffect(() => {
    // cleaning the previous search results on component did mount
    dispatch({
      type: SET_JOB_DATA,
      payload: [],
    });
    // eslint-disable-next-line
  }, []);

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
              placeholder="Search for a job..."
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto d-flex justify-content-center">
          {query && isLoading && (
            <Spinner animation="grow" variant="primary" className="mt-3" />
          )}
          {isError && (
            <Alert variant="danger" className="mt-3">
              Something went wrong!
            </Alert>
          )}
        </Col>
        {jobs && (
          <Col xs={10} className="mx-auto mb-5">
            {jobs.map((jobData) => (
              <Job key={jobData._id} job={jobData} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
