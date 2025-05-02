import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleImg from '../../assets/googlelogo.png';
import FacebookImg from '../../assets/facebook-logo.png';
// import googleimage from ""
// import image from "..//////////../"

const SignIn = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add real authentication logic here
    navigate('/profile', { state: { role } });
  };

  return (
    <div className={classNames("flex justify-center items-center h-screen")}>
      <div
        className={classNames(
          "shadow-md p-5 rounded border flex self-center flex-col items-center justify-center w-[33%] max-w-[35%] min-w-[300px]"
        )}
      >
        <div
          className={classNames(
            "flex gap-5 items-center justify-between w-full"
          )}
        >
          <button
            className={classNames(
              "shadow flex items-center justify-between flex-1 rounded py-1.5 px-4"
            )}
          >
            <span>Google</span>
            <img src={GoogleImg} alt="Google" className="w-6 h-6" />
          </button>
          <span>Or</span>
          <button
            className={classNames(
              "shadow flex items-center justify-between flex-1 rounded py-1.5 px-4"
            )}
          >
            <span>Facebook</span>
            <img src={FacebookImg} alt="Facebook" className="w-6 h-6" />
          </button>
        </div>

        <div className={classNames("w-full")}>
          <div className={classNames("mt-5")}>
            <label>User Name</label>
            <input
              type="text"
              placeholder="username..."
              className={classNames(
                "w-full border rounded py-1.5 px-2 mt-1 focus:outline-none"
              )}
            />
          </div>

          <div className={classNames("mt-5")}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email..."
              className={classNames(
                "w-full border rounded py-1.5 px-2 mt-1 focus:outline-none"
              )}
            />
          </div>

          <div className={classNames("mt-5")}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password..."
              className={classNames(
                "w-full border rounded py-1.5 px-2 mt-1 focus:outline-none"
              )}
            />
          </div>

          <div className={classNames("mt-5")}>
            <label>Role</label>
            <select
              value={role}
              onChange={e => setRole(e.target.value)}
              className="w-full border rounded py-1.5 px-2 mt-1 focus:outline-none"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        <div
          className={classNames(
            "mt-5 border rounded w-full flex justify-center py-2.5 bg-[#8051C6] text-white"
          )}
        >
          <button onClick={handleLogin} className="w-full">LogIn</button>
        </div>

        <div>
          Don't have account ?{" "}
          <Link to={"/sign-up"} className={classNames("text-blue-700")}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
