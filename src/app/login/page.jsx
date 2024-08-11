"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const router = useRouter();
  const [err, setErr] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-14 mb-20 text-white mx-auto max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0">
        <Image
          width={500}
          height={500}
          src="/Tablet-login-cuate.png"
          className="h-3/4 w-full object-cover md:h-full block "
          alt=""
        />
        <div className="self-center">
          <h1 className="text-4xl font-bold text-center">Login</h1>
          {err && <h3 className=" my-4 p-2 rounded bg-rose-600">{err} </h3>}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="text-xl">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className="w-full p-3 bg-slate-700/50 outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-xl">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                className="w-full p-3 bg-slate-700/50 outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
                placeholder="xxxxxxxx"
              />
            </div>
            <div className="flex justify-between items-center">
              <input
                type="submit"
                value="Login"
                className="bg-blue-600 px-4 py-2 rounded text-xl"
              />
              <p className="text-blue-600 underline cursor-pointer">
                Forgot Password?
              </p>
            </div>
            <p className="">
              Not a member ?{" "}
              <Link href={"/register"} className="text-blue-600 underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
