import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Field from "../shared/Field";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();

  const handleRegister = async (formData) => {
    try {
      setLoading(true);
      const fullName = `${formData.firstName} ${formData.lastName}`;

      await registerUser(formData.email, formData.password);
      await updateUserProfile(fullName, null);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)} autoComplete="off">
      <Field label="First Name" error={errors.firstName}>
        <input
          {...register("firstName", {
            required: "First name is required.",
          })}
          type="text"
          id="firstName"
          name="firstName"
          className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </Field>
      <Field label="Last Name" error={errors.lastName}>
        <input
          {...register("lastName", {
            required: "Last name is required.",
          })}
          type="text"
          id="lastName"
          name="lastName"
          className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email Id is required." })}
          type="email"
          id="email"
          name="email"
          className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters.",
            },
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
          {loading ? "Creating..." : "Create Account"}
        </button>
      </div>
      <p className="text-center">
        Already have account?
        <Link to="/login" className="text-indigo-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
