import { createBrowserRouter } from "react-router-dom";
import PostList from "./pages/PostList.jsx";

const routes = [{ path: "", Element: <PostList /> }];

const router = createBrowserRouter(routes);

export default router;
