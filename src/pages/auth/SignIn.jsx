import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleImg from '../../assets/googlelogo.png';
import FacebookImg from '../../assets/facebook-logo.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  role: yup.string().required("Role is required"),
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
    navigate('/profile', { state: { role: data.role } });
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

        <form onSubmit={handleSubmit(onSubmit)} className={classNames("w-full")}>
          <div className={classNames("mt-5")}>
            <label>User Name</label>
            <input
              type="text"
              placeholder="username..."
              className={classNames(
                "w-full border rounded py-1.5 px-2 mt-1 focus:outline-none",
                errors.username && "border-red-500"
              )}
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

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

          <div className={classNames("mt-5")}>
            <label>Role</label>
            <select
              className={classNames(
                "w-full border rounded py-1.5 px-2 mt-1 focus:outline-none",
                errors.role && "border-red-500"
              )}
              {...register("role")}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
            )}
          </div>

          <div
            className={classNames(
              "mt-5 border rounded w-full flex justify-center py-2.5 bg-[#8051C6] text-white"
            )}
          >
            <button type="submit" className="w-full">LogIn</button>
          </div>
        </form>

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
