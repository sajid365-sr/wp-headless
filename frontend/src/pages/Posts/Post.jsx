import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  let process = import.meta.env;
  const url = `${process.VITE_REACT_SERVER_URL}/posts/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setPost(response.data);
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

  const { title, excerpt, content, date } = post;

  return (
    <section className="min-h-[calc(100vh-136px)] p-10 ">
      <div className="w-3/4 relative mx-auto shadow-sm p-10 bg-gray-100">
        <h1 className="text-4xl mb-10">{title.rendered}</h1>
        <p
          className="mb-10"
          dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
        />
        <p dangerouslySetInnerHTML={{ __html: content.rendered }} />
        <span className="absolute right-5 top-5">{date}</span>
      </div>
    </section>
  );
};

export default Post;
