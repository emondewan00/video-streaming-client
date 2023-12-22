"use client";
import { useForm } from "react-hook-form";
import apiInstance from "@/utils/axios";
import { useContext, useState } from "react";
import { AuthContext } from "@/Provider/AuthProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [registerErr, setRegisterErr] = useState("");
  const { emailAndPass, updateUser, currentUser } = useContext(AuthContext);

  if (currentUser) return router.push("/");

  const onSubmit = async ({
    password,
    confPassword,
    userName,
    displayName,
    photoUrl,
    email,
  }) => {
    try {
      if (password !== confPassword) {
        return setRegisterErr("Password not match!");
      }
      const name = userName.split(" ").join("");
      //user details post in server
      await apiInstance.post("/users", {
        userName: name,
        displayName,
        photoUrl,
        email,
      });
      //create user in firebase
      const user = await emailAndPass(email, password);
      //update user details in firebase
      await updateUser(user.user, displayName, photoUrl);
      router.push("/");
    } catch (error) {
      if (error.response.status === 400) {
        return setRegisterErr("User Name or Email exists");
      }
      return setRegisterErr("Try agin!");
    }
  };

  return (
    <div className="mt-14 mb-20 text-white mx-auto md:max-w-5xl ">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-8 md:mx-0">
        <Image
          width={500}
          height={500}
          src="/Tablet-login-cuate.png"
          className="h-3/4 w-full object-cover md:h-full block "
          alt=""
        />
        <div className="self-center">
          <h1 className="text-4xl font-bold text-center">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <div>
                <label htmlFor="userName" className="text-xl">
                  User Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="userName"
                  {...register("userName", { required: true })}
                  className="w-full p-3 bg-slate-700/50 outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
                  placeholder="Type your user name"
                />
              </div>
              <div>
                <label htmlFor="displayName" className="text-xl">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="displayName"
                  {...register("displayName", { required: true })}
                  className="w-full p-3 bg-slate-700/50 outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
                  placeholder="Type your Full name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
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
                <label htmlFor="photoUrl" className="text-xl">
                  Image <span className="text-red-600">*</span>
                </label>
                <input
                  id="photoUrl"
                  type="text"
                  {...register("photoUrl")}
                  className="w-full p-3 bg-slate-700/50 outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
                  placeholder="Your image link"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
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
              <div>
                <label htmlFor="confPassword" className="text-xl">
                  Repeat Password <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  id="confPassword"
                  {...register("confPassword", { required: true })}
                  className="w-full p-3 bg-slate-700/50 outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
                  placeholder="xxxxxxxx"
                />
              </div>
            </div>

            <input
              type="submit"
              value="Register"
              className="bg-blue-600 px-4 py-2 rounded text-xl w-full"
            />
          </form>
          {registerErr && (
            <h3 className=" mt-2 p-2 rounded bg-rose-600">{registerErr}</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
