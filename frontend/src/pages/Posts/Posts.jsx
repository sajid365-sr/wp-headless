import { useState, useEffect } from "react";
import axios from "axios";

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
    return <div>Loading...</div>;
  }

  console.log(posts);
  // grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5

  // function createMarkup() {
  //   return { __html: "First &middot; Second" };
  // }

  return (
    <div className="flex gap-10 flex-col">
      {posts.map((post) => (
        <div
          className="bg-gray-600 px-5 py-8 rounded-xl shadow-md shadow-gray-500 text-xl"
          key={post.id}
        >
          <h2>{post.title.rendered}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
