import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-lg">
      <ul className="p-5">
        <li className="flex px-10 gap-10 items-center justify-end mx-auto">
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
