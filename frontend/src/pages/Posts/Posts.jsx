import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  let process = import.meta.env;
  const url = `${process.VITE_REACT_SERVER_URL}/posts`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-5xl min-h-[calc(100vh-136px)] grid place-items-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <h2 className="text-center my-10 text-4xl font-semibold">POSTS</h2>
      <div className="grid px-10 my-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {posts.map((post) => (
          <div
            className="px-5 text-left py-8 rounded-md shadow-lg text-xl"
            key={post.id}
          >
            <Link to={`/posts/${post.id}`}>
              <img src="https://placehold.co/450x300" alt="" />
              <h2 className="font-semibold my-4">{post.title.rendered}</h2>
            </Link>
            <p
              className="text-gray-500"
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered.slice(0, 120),
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
