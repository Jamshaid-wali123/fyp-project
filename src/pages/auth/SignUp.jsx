import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import GoogleImg from '../../assets/googlelogo.png';
import FacebookImg from '../../assets/facebook-logo.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .min(13, "You must be at least 13 years old")
    .required("Age is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup
    .string()
    .matches(/^92-\d{3}-\d{7}$/, "Phone must be in format 92-XXX-XXXXXXX")
    .required("Phone is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/(?=.*[!@#$%^&*])(?=.*\d)/, "Include must be special character and number")
    .required("Password is required"),
});

const getPasswordStrength = (password) => {
  if (!password || password.length < 8) return '';
  if (/^(?=.*[!@#$%^&*])(?=.*\d).{10,}$/.test(password)) return 'Strong';
  if (/^(?=.*[!@#$%^&*])(?=.*\d).{8,}$/.test(password)) return 'Medium';
  return 'Weak';
};

const SignUp = () => {
  const navigate = useNavigate();
  const [passwordStrength, setPasswordStrength] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const passwordValue = watch('password');

  // Update password strength on password change
  useState(() => {
    setPasswordStrength(getPasswordStrength(passwordValue));
  }, [passwordValue]);

  const onSubmit = (data) => {
    // TODO: Add real registration logic here
    navigate('/sign-in');
  };

  return (
    <div className={classNames("flex justify-center items-center h-screen bg-white")}> 
      <div className={classNames("shadow-md p-8 rounded border flex flex-col items-center w-full max-w-md")}> 
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Ali khan"
              className={classNames(
                "w-full border rounded py-2 px-3 mt-1 focus:outline-none",
                errors.name && "border-red-500"
              )}
              {...register("name")}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              placeholder="16"
              className={classNames(
                "w-full border rounded py-2 px-3 mt-1 focus:outline-none",
                errors.age && "border-red-500"
              )}
              {...register("age")}
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="alikhan@gmail.com"
              className={classNames(
                "w-full border rounded py-2 px-3 mt-1 focus:outline-none",
                errors.email && "border-red-500"
              )}
              {...register("email")}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              placeholder="92-XXX-XXXXXXX"
              className={classNames(
                "w-full border rounded py-2 px-3 mt-1 focus:outline-none",
                errors.phone && "border-red-500"
              )}
              {...register("phone")}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="********"
              className={classNames(
                "w-full border rounded py-2 px-3 mt-1 focus:outline-none",
                errors.password && "border-red-500"
              )}
              {...register("password")}
              onChange={e => {
                setPasswordStrength(getPasswordStrength(e.target.value));
              }}
            />
            <div className="flex items-center justify-between">
              {passwordStrength && (
                <span className={classNames("text-xs mt-1", passwordStrength === 'Strong' ? 'text-green-600' : passwordStrength === 'Medium' ? 'text-yellow-600' : 'text-red-600')}>{passwordStrength}</span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">Include must be special character and number</p>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md text-white text-lg font-semibold bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 mt-4"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-indigo-600 hover:text-indigo-500 font-medium">Log in.</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
