import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Field from "../shared/Field";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (formData) => {
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", {
            required: "Email is required.",
          })}
          type="email"
          id="email"
          name="email"
          className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </Field>

      <Field label="password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required.",
          })}
          type="password"
          id="password"
          name="password"
          className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </Field>
      <div className="mb-6">
        <button
          type="submit"
          className="w-full p-3 text-white transition-all duration-200 bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Login
        </button>
      </div>
      <p className="text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-indigo-600 hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
}
