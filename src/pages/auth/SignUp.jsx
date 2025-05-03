import { Link } from "react-router-dom";
import classNames from "classnames";
import GoogleImg from '../../assets/googlelogo.png'
import FacebookImg from '../../assets/facebook-logo.png'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .min(18, "You must be at least 18 years old")
    .max(100, "Age must be less than 100")
    .required("Age is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("Password is required"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // TODO: Add real registration logic here
    console.log(data);
  };

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
            <label>Name</label>
            <input
              type="text"
              placeholder="Name..."
              className={classNames(
                "w-full border rounded py-1.5 px-2 mt-1 focus:outline-none",
                errors.name && "border-red-500"
              )}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className={classNames("mt-5")}>
            <label>Age</label>
            <input
              type="number"
              placeholder="Age..."
              className={classNames(
                "w-full border rounded py-1.5 px-2 mt-1 focus:outline-none",
                errors.age && "border-red-500"
              )}
              {...register("age")}
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
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
            <label>Phone No</label>
            <input
              type="tel"
              placeholder="Phone-no..."
              className={classNames(
                "w-full border rounded py-1.5 px-2 mt-1 focus:outline-none",
                errors.phone && "border-red-500"
              )}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
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
              "mt-5 border rounded w-full flex justify-center py-2.5 bg-[#8051C6] text-white"
            )}
          >
            <button type="submit">Sign up</button>
          </div>
        </form>

        <div>
          Already have an Account?{" "}
          <Link to={"/sign-in"} className={classNames("text-blue-700")}>
            Login 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
