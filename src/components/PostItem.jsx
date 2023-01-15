import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PostItem({ post, onDelete = () => {} }) {
  function onDeleteClick(post) {
    if (!window.confirm("Confirm the deletion")) {
      return;
    }
    fetch(`https://json[laceholder.typicode.com/posts/${post.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        onDelete(post);
      }
    });
  }
  return (
    // <Card style={{ width: "18rem" }}>
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="outline-danger" onClick={() => onDeleteClick}>
          Delete Post
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PostItem;
