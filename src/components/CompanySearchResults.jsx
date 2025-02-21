import { useEffect } from "react";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyData } from "../redux/actions";
import Job from "./Job";
import GoSerchPageButton from "./GoSearchPageButton";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.company.companyData);
  const params = useParams();
  console.log(useSelector((state) => state.company));
  const isLoading = useSelector((state) => state.company.isLoadingCompany);
  const isError = useSelector((state) => state.company.isErrorCompany);

  useEffect(() => {
    dispatch(getCompanyData(params.companyName));
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
        </Col>{" "}
      </Row>
      <Row className="justify-content-center">
        <Col xs={10} className="mx-auto d-flex justify-content-center">
          {isLoading && (
            <Spinner animation="grow" variant="primary" className="mt-3" />
          )}
          {isError && (
            <Alert variant="danger" className="mt-3">
              Something went wrong!
            </Alert>
          )}
        </Col>
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
