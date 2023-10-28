/* eslint-disable react-hooks/rules-of-hooks */
import { Input } from "@material-tailwind/react";
import Link from "next/link";
import React, { useContext } from "react";
import { TbBrandGoogle } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider.jsx";
import Router from "next/router.js";

const register = () => {
  const { registerUser, updateUserDetails, handleGoogleSignIn } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if ((!data.email, !data.password, !data.name)) {
      setError("Please provide valid information");
      return;
    } else {
      registerUser(data.email, data.password).then((result) => {
        updateUserDetails(result.user, data.name, data.photo);
        reset();
        toast.success("Successfully registered");
        Router.push("/login");
      });
    }
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
          <Input color="blue" label="Name" {...register("name")} required />
          <Input color="blue" label="Email" {...register("email")} required />

          <Input
            type={"password"}
            {...register("password")}
            color="blue"
            label="Password"
            required
            className=""
          />
          <Input color="blue" label="Photo" {...register("Photo")} required />
        </div>

        <button
          type="submit"
          className="bg-[#258AFF] px-16 py-2 rounded-xl mt-4 text-white font-bold hover:-translate-y-1 duration-300"
        >
          Sign Up
        </button>
        <p className="mb-4 mt-6 text-sm">
          <span className="text-xl">Already Have an Account?</span>
          <Link
            href="/login"
            className="text-xl hover:underline decoration-1 text-blue-400"
          >
            Sign in
          </Link>
        </p>
      </form>
    </section>
  );
};

export default register;
