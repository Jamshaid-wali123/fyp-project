import { Link } from "react-router-dom";
import classNames from "classnames";

const SignUp = () => {
  return (
    <div className={classNames("flex justify-center my-7 items-center h-screen")}>
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
            <i>Icon</i>
          </button>
          <span>Or</span>
          <button
            className={classNames(
              "shadow flex items-center justify-between flex-1 rounded py-1.5 px-4"
            )}
          >
            <span>Facebook</span>
            <i>Icon</i>
          </button>
        </div>

        <div className={classNames("w-full")}>
          <div className={classNames("mt-5")}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name..."
              className={classNames(
                "w-full border rounded py-1.5 px-2 mt-1 focus:outline-none"
              )}
            />
          </div>

          <div className={classNames("mt-5")}>
            <label>Age</label>
            <input
              type="number"
              placeholder="Age..."
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
            <label>Phone No</label>
            <input
              type="Phone"
              placeholder="Phone-no..."
              className={classNames(
                "w-full border rounded py-1.5 px-2 mt-1 focus:outline-none"
              )}
            />
          </div>
          <div className={classNames("mt-5")}>
            <label>Password</label>
            <input
              type="Password"
              placeholder="Password..."
              className={classNames(
                "w-full border rounded py-1.5 px-2 mt-1 focus:outline-none"
              )}
            />
          </div>
        </div>

        <div
          className={classNames(
            "mt-5 border rounded w-full flex justify-center py-2.5 bg-[#8051C6] text-white"
          )}
        >
          <button>Sign up</button>
        </div>

        <div>
          Already have an Account?{" "}
          <Link to={"/sign-in"} className={classNames("text-blue-700")}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
