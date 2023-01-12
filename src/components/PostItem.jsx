import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample({ post }) {
  return (
    // <Card style={{ width: "18rem" }}>
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
