import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyJobData } from "../redux/actions";
import Job from "./Job";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.companyJobs[0]);

  console.log(jobs);
  const params = useParams();

  useEffect(() => {
    dispatch(getCompanyJobData(params.companyName));
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Row>
        {jobs && (
          <Col>
            {jobs.map((jobData, index) => (
              <Job key={jobData._id} data={jobData} index={index} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
