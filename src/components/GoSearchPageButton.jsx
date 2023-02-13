import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GoSerchPageButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="primary"
      className="d-flex justify-content-center align-items-center px-2"
      onClick={() => navigate("/")}
    >
      Go to search page!
    </Button>
  );
};

export default GoSerchPageButton;
