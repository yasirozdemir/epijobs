import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToFavFunction, removeFromFavFunction } from "../redux/actions";

const Job = ({ job }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.content);
  const isFavorite = favorites.some((j) => job._id === j._id);

  return (
    <Row
      className="jobCard align-items-center mx-0 mt-3 p-3"
      style={{
        border: "1px solid #00000033",
        borderRadius: 4,
      }}
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
          style={{ fontWeight: 700 }}
        >
          {job.title}
        </a>
      </Col>

      <Col xs={1}>
        {isFavorite ? (
          <AiFillStar
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            className="text-primary"
            onClick={() => {
              dispatch(removeFromFavFunction(job._id));
            }}
          />
        ) : (
          <AiOutlineStar
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            className="text-primary"
            onClick={() => {
              dispatch(addToFavFunction(job));
            }}
          />
        )}
      </Col>
    </Row>
  );
};

export default Job;
