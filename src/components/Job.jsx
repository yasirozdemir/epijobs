import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiTwotoneLike, AiFillDislike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToFavFunction, removeFromFavFunction } from "../redux/actions";

const Job = ({ job }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.content);
  const isFavorite = favorites.some((Job) => job._id === Job._id);

  return (
    <Row
      className="jobCard align-items-center mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${job.company_name}`} className="text-dark">
          {job.company_name}
        </Link>
      </Col>
      <Col>
        <a
          href={job.url}
          target="_blank"
          rel="noreferrer"
          className="text-dark"
        >
          {job.title}
        </a>
      </Col>

      <Col xs={1}>
        {isFavorite ? (
          <Button
            variant="outline-danger"
            className="d-flex justify-content-center align-items-center px-2"
            onClick={() => {
              dispatch(removeFromFavFunction(job._id));
            }}
          >
            <AiFillDislike />
          </Button>
        ) : (
          <Button
            variant="outline-success"
            className="d-flex justify-content-center align-items-center px-2"
            onClick={() => {
              dispatch(addToFavFunction(job));
            }}
          >
            <AiTwotoneLike />
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default Job;
