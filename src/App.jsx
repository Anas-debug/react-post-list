import { RouterProvider } from "react-router-dom";
import "./App.css";
import PostList from "./pages/PostList";
import router from "./router";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      {/* <PostList /> */}
      <RouterProvider router={router} />
      <Button variant="primary">start</Button>
    </div>
  );
}

export default App;
