import { Container, Row, Col, Table } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavFunction } from "../redux/actions";
import GoSerchPageButton from "./GoSearchPageButton";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.content);
  const dispatch = useDispatch();

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
            <GoSerchPageButton />
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
                      <AiFillStar
                        style={{ fontSize: "1.5rem", cursor: "pointer" }}
                        className="text-primary"
                        onClick={() => {
                          dispatch(removeFromFavFunction(job._id));
                        }}
                      />
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
