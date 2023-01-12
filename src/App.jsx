import { RouterProvider } from "react-router-dom";
import "./App.css";
import PostList from "./pages/PostList";
import router from "./router";

function App() {
  return (
    <div className="App">
      <PostList />
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
