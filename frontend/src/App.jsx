import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Posts/Post";
import Login from "./pages/auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
