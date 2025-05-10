import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import GoogleImg from '../../assets/googlelogo.png';
import FacebookImg from '../../assets/facebook-logo.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // TODO: Add real authentication logic here
    navigate('/');
  };

  return (
    <div className={classNames("flex justify-center items-center h-screen")}>
      <div
        className={classNames(
          "shadow-md p-5 rounded border flex self-center flex-col items-center justify-center w-[33%] max-w-[35%] min-w-[300px]"
        )}
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className={classNames("w-full")}>
          <div className={classNames("mt-5")}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email..."
              className={classNames(
                "w-full border rounded py-1.5 px-2 mt-1 focus:outline-none",
                errors.email && "border-red-500"
              )}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className={classNames("mt-5")}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password..."
              className={classNames(
                "w-full border rounded py-1.5 px-2 mt-1 focus:outline-none",
                errors.password && "border-red-500"
              )}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div
            className={classNames(
              "mt-5 border rounded w-full flex justify-center py-2.5 bg-[#8051C6] text-white cursor-pointer hover:bg-[#6a43a8] transition-colors"
            )}
          >
            <button type="submit" className="w-full">Login</button>
          </div>
        </form>

        <div className="mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/sign-up" className={classNames("text-blue-700")}>Sign Up</Link>
        </div>

        <div className="mt-6 w-full">
          <div className="relative flex items-center justify-center">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="bg-white px-4 text-gray-500 text-sm">Or continue with</span>
            <div className="border-t border-gray-300 w-full"></div>
          </div>

          <div className={classNames("flex gap-4 mt-4")}>
            <button
              className={classNames(
                "shadow flex items-center justify-center flex-1 rounded py-2 px-4 border hover:bg-gray-50 transition-colors"
              )}
            >
              <img src={GoogleImg} alt="Google" className="w-5 h-5 mr-2" />
              <span>Google</span>
            </button>
            <button
              className={classNames(
                "shadow flex items-center justify-center flex-1 rounded py-2 px-4 border hover:bg-gray-50 transition-colors"
              )}
            >
              <img src={FacebookImg} alt="Facebook" className="w-5 h-5 mr-2 rounded-full" />
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
