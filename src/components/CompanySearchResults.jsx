import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyJobData } from "../redux/actions";
import Job from "./Job";
import GoSerchPageButton from "./GoSearchPageButton";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.companyJobs[0]);

  const params = useParams();

  useEffect(() => {
    dispatch(getCompanyJobData(params.companyName));
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="d-flex justify-content-between align-items-center mx-auto my-1"
        >
          <h1 variant="primary">{params.companyName}</h1>
          <GoSerchPageButton />
        </Col>
      </Row>
      <Row className="justify-content-center">
        {jobs && (
          <Col xs={10}>
            {jobs.map((jobData) => (
              <Job key={jobData._id} job={jobData} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
