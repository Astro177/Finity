/* eslint-disable react-hooks/rules-of-hooks */
import { TbBrandGoogle } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Link from "next/link.js";
import { useContext, useState } from "react";
import { Input } from "@material-tailwind/react";
import { AuthContext } from "../../Provider/AuthProvider.jsx";

const login = () => {
  const { handleGoogleSignIn, signIn } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        reset();
        toast.success("Successfully logged in!");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <section className="max-w-[500px] mx-auto mt-[300px] mb-[380px] border-2 text-center">
      <div
        className="flex justify-center mt-4 mb-2 items-center bg-blue-400 w-[250px] mx-auto py-2 rounded-lg text-black gap-2 font-bold hover:-translate-y-1 duration-300"
        onClick={handleGoogleSignIn}
      >
        <button className="text-4xl rounded-xl hover:scale-110 duration-150">
          <TbBrandGoogle />
        </button>
        <p>Continue With Google</p>
      </div>
      <p className="mt-6 mb-10">Or</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2 flex flex-col gap-6 w-[280px] mx-auto">
          <Input color="blue" label="Email" {...register("email")} required />

          <Input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            color="blue"
            label="Password"
            required
            className=""
          />
        </div>
        <p className="text-red-800">{error}</p>

        <div
          className="rounded-3xl mt-5 text-sm"
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? "Show Password" : "Hide password"}
        </div>

        <button
          type="submit"
          className="bg-[#258AFF] px-16 py-2 rounded-xl mt-4 text-white font-bold hover:-translate-y-1 duration-300"
        >
          Sign In
        </button>
        <p className="mb-4 mt-6 text-sm">
          <span className="text-2xl">New here?</span>
          <Link
            href="/register"
            className="text-xl hover:underline decoration-1 text-blue-400"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </section>
  );
};

export default login;
