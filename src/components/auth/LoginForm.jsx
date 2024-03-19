import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Field from "../shared/Field";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();

  const handleLogin = async (formData) => {
    try {
      setLoading(true);
      const { user } = await signInUser(formData.email, formData.password);
      if (user?.email) {
        toast.success("Login success.");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
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
          disabled={loading}
          type="submit"
          className="w-full p-3 text-white transition-all duration-200 bg-indigo-600 rounded-md disabled:bg-gray-500 hover:bg-indigo-700"
        >
          {loading ? "Logging..." : "Login"}
        </button>
      </div>
      <SocialLogin
        githubTitle="Login with Github"
        googleTitle="Login with Google"
      />
      <p className="text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-indigo-600 hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
}
