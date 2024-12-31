import { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginContext } from "../../App";

const Login = () => {
  const { setLogin } = useContext(loginContext);
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "badhon@gmail.com",
    email1: "",
    password: "12345",
    date: "",
    gender: "",
  });
  const [open, setOpen] = useState(false);

  const HandelLogin = async (e) => {
    e.preventDefault();
    setLogin(true);
    toast.success("Login Successfully");
  };

  const HandelReg = async (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <div className="bg-[#f1e9e9] min-h-screen w-full flex flex-col items-center relative">
      {/* Header Section */}
      <div className="w-11/12 max-w-[1200px] flex flex-col mt-10 lg:mt-20">
        <h2 className="text-blue-600 font-semibold text-4xl lg:text-7xl">
          facebook
        </h2>
        <h3 className="mt-3 text-center lg:text-left text-sm md:text-base">
          Facebook helps you connect and share <br /> with the people in your life.
        </h3>
      </div>

      {/* Login Form */}
      <div className="w-11/12 max-w-[400px] bg-white rounded-lg shadow-md mt-10 lg:mt-20 p-6">
        <form onSubmit={HandelLogin}>
          <div className="mb-4">
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email address or phone number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-700 transition"
            >
              Log in
            </button>
          </div>
          <div className="text-center text-blue-600 text-xs">
            <Link to={"/"}>Forgotten password?</Link>
          </div>
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="bg-green-600 text-white font-semibold rounded-md px-6 py-2 hover:bg-green-700 transition"
            >
              Create new account
            </button>
          </div>
        </form>
      </div>

      {/* Registration Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-11/12 max-w-[500px] p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-2xl font-semibold">Sign Up</h1>
                <p className="text-sm text-gray-500">It's quick and easy.</p>
              </div>
              <RxCross1
                size={20}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <form onSubmit={HandelReg}>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-1/2 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  value={form.surname}
                  onChange={(e) => setForm({ ...form, surname: e.target.value })}
                  className="w-1/2 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  required
                  value={form.email1}
                  onChange={(e) => setForm({ ...form, email1: e.target.value })}
                  placeholder="Mobile number or email address"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="New password"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">Gender</label>
                <select
                  required
                  value={form.gender}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
              <div className="text-xs text-gray-500 mb-4">
                By clicking Sign Up, you agree to our{" "}
                <Link to="/terms" className="text-blue-600">
                  Terms
                </Link>
                ,{" "}
                <Link to="/privacy" className="text-blue-600">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/cookies" className="text-blue-600">
                  Cookies Policy
                </Link>
                .
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white font-semibold rounded-md px-6 py-2 hover:bg-green-700 transition"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
