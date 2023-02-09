import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiTwotoneLike, AiFillDislike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data, index }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.content);
  const isFavorite = favorites.some((job) => data._id === job._id);

  return (
    <Row
      className="jobCard align-items-center mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`} className="text-dark">
          {data.company_name}
        </Link>
      </Col>
      <Col>
        <a
          href={data.url}
          target="_blank"
          rel="noreferrer"
          className="text-dark"
        >
          {data.title}
        </a>
      </Col>

      <Col xs={1}>
        {isFavorite ? (
          <Button
            variant="outline-danger"
            className="d-flex justify-content-center align-items-center px-2"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_FAV",
                payload: index,
              });
            }}
          >
            <AiFillDislike />
          </Button>
        ) : (
          <Button
            variant="outline-success"
            className="d-flex justify-content-center align-items-center px-2"
            onClick={() => {
              dispatch({
                type: "ADD_TO_FAV",
                payload: data,
              });
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
