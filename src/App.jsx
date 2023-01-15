import { RouterProvider } from "react-router-dom";
import "./App.css";
import PostList from "./pages/PostList";
import router from "./router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PostList />
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
