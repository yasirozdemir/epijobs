import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { AiFillDislike } from "react-icons/ai";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.content);
  return (
    <>
      <Container>
        <h1>Favorites</h1>
        <Row>
          <Col>
            <Table striped="columns">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Company Name</th>
                  <th>Job Title</th>
                  <th>Location</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {favorites.map((job, index) => (
                  <tr key={index}>
                    <td>
                      <strong>{index}</strong>
                    </td>
                    <td>{job.company_name}</td>
                    <td>
                      <strong>{job.title}</strong>
                    </td>
                    <td>{job.candidate_required_location}</td>
                    <td>
                      <Button
                        variant="outline-danger"
                        className="d-flex justify-content-center align-items-center px-2"
                      >
                        <AiFillDislike />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Favorites;
