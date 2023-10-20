import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-700">
      <span className="text-sm text-gray-300 sm:text-center dark:text-gray-200">
        © 2022{" "}
        <Link
          href="https://flowbite.com"
          className="hover:underline"
          target="_blank"
        >
          Flowbite™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
        <li>
          <Link
            href="#"
            className="mr-4 text-sm text-gray-300 hover:underline md:mr-6 dark:text-gray-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="mr-4 text-sm text-gray-300 hover:underline md:mr-6 dark:text-gray-200"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="mr-4 text-sm text-gray-300 hover:underline md:mr-6 dark:text-gray-200"
          >
            Licensing
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-sm text-gray-300 hover:underline dark:text-gray-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
