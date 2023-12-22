"use client";
import { useForm } from "react-hook-form";
import apiInstance from "@/utils/axios";

const Account = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (doc) => {
    try {
      //create user in firebase
      const user = await emailAndPass(doc.email, doc.password);
      //update user details in firebase
      const updateProfile = await updateUser(user.user, doc.name, doc.img);
      //user details post in server
      const userPostInServer = await apiInstance.post("/users", {
        displayName: doc.name,
        photoURL: doc.img,
        email: doc.email,
      });
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className=" profile  mx-auto">
        <img
          src="https://i.ibb.co/LnLzgx3/17.jpg"
          alt=""
          className="h-[190px] w-52 rounded bg-cover object-cover"
        />
        <div className="px-4 space-y-4">
          <div>
            <label htmlFor="name" className="text-xl">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="w-full p-3 bg-slate-700/50  outline-none border-blue-900 focus:border duration-150 delay-100 ease-linear rounded mt-2"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="name" className="text-xl">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="w-full p-3 bg-slate-700/50  outline-none border-blue-900 focus:border duration-150 delay-100 ease-linear rounded mt-2"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-xl">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="w-full p-3 bg-slate-700/50  outline-none border-blue-900 focus:border duration-150 delay-100 ease-linear rounded mt-2"
              placeholder="example@gmail.com"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Account;
