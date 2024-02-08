"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data: string) => {
    try {
      // const response = await fetch('/api/submit-form', {
      // 	method: 'POST',
      // 	body: JSON.stringify(formData),
      // });
      console.log(data);
      // Handle success response
    } catch (error) {
      // Handle error
    } finally {
    }
  };

  //   const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  console.log(watch("name"));
  return (
    <form
      className="flex min-h-screen flex-col items-center justify-between p-24 w-full space-x-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-gray-800 rounded-lg shadow dark:bg-gray-800">
        <div className="mb-6 text-3xl font-light text-center text-gray-800 text-white">
          Contact us !
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
          <div className="col-span-2 lg:col-span-1">
            <div className=" relative ">
              <input
                type="text"
                id="contact-form-name"
                name="name"
                defaultValue=""
                {...register("name")}
                {...register("name", { required: true })}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-red-700">This Name is required</span>
              )}
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className=" relative ">
              <input
                type="text"
                id="contact-form-email"
                name="email"
                defaultValue=""
                {...register("email")}
                {...register("email", { required: true })}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
          </div>
          <div className="col-span-2">
            <label className="text-gray-700" htmlFor="comment">
              <textarea
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                defaultValue=""
                {...register("comment")}
                {...register("comment", { required: true })}
                placeholder="Enter your comment"
                name="comment"
                rows="5"
                cols="40"
              ></textarea>
            </label>
            {errors.comment && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
          <div className="col-span-2 text-right">
            <button
              type="submit"
              className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
