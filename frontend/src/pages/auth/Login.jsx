import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const process = import.meta.env;

  const formik = useFormik({
    // initial values
    initialValues: {
      email: "",
      password: "",
    },

    // validate schema
    validationSchema: Yup.object({
      email: Yup.string().required().email(),
      password: Yup.string().required().min(4),
    }),

    // on submit
    onSubmit: async ({ email, password }) => {
      try {
        const res = await axios.post(`${process.VITE_REACT_AUTH_TOKEN}`, {
          username: email,
          password: password,
        });
        if (res.status === 200 && res.statusText === "OK") {
          localStorage.setItem("user", JSON.stringify(res.data));
          alert(res.data.user_nicename);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  return (
    <>
      <h2 className="text-center my-10 text-4xl font-semibold">lOGIN</h2>
      <div className="flex w-[80%] flex-col lg:flex-row mx-auto my-20">
        <div>
          <img src="/login.png" alt="" />
        </div>
        <div className="flex shadow-xl rounded-md items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <form
              onSubmit={formik.handleSubmit}
              className="rounded-md flex flex-col gap-5"
            >
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex  items-center justify-between">
                <div className="flex items-center">
                  <input
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
