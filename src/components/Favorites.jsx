import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { AiFillDislike } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromFavFunction } from "../redux/actions";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col
            xs={10}
            className="d-flex justify-content-between align-items-center mx-auto my-3"
          >
            <h1 className="my-2" variant="primary">
              Favorites
            </h1>
            <Button
              variant="primary"
              className="d-flex justify-content-center align-items-center px-2"
              onClick={() => navigate("/")}
            >
              Go to search page!
            </Button>
          </Col>
          <Col xs={10}>
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
                      <strong>{index + 1}</strong>
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
                        onClick={() => {
                          dispatch(removeFromFavFunction(job._id));
                        }}
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
