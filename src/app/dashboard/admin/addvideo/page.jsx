"use client";
import apiInstance from "@/utils/axios";
import videoCategories from "@/utils/categories";
import { useForm } from "react-hook-form";

const AddVideo = () => {
  const { register, handleSubmit, reset } = useForm();
  const formSubmitHandler = async (data) => {
    const result = await apiInstance.post("/videos", data);
    console.log(result);
    reset();
  };

  return (
    <div className="py-10">
      <div className=" max-w-3xl mx-auto bg-slate-800/25 p-6 rounded shadow-sm shadow-gray-50/30 h-full ">
        <h1 className="text-4xl font-bold text-center ">Add Video</h1>
        <form onSubmit={handleSubmit(formSubmitHandler)} className="space-y-4">
          <div>
            <label htmlFor="title" className="text-xl">
              Title <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              className="w-full p-3 bg-slate-700/50  outline-none border-blue-900 focus:border duration-150 delay-100 ease-linear rounded mt-2"
              placeholder="Video name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
            <div>
              <label htmlFor="video" className="text-xl">
                Video Link <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="video"
                // {...register("video")}
                className="w-full p-3 bg-slate-700/50  outline-none border-blue-900 focus:border duration-150 delay-100 ease-linear rounded mt-2"
                placeholder="Video Link"
              />
            </div>
            <div>
              <label htmlFor="thumbnail" className="text-xl">
                Thumbnail <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="thumbnail"
                {...register("thumbnail", { required: true })}
                className="w-full p-3 bg-slate-700/50  outline-none border-blue-900 focus:border duration-150 delay-100 ease-linear rounded mt-2"
                placeholder="Thumbnail Link"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
            <div>
              <label htmlFor="category" className="text-xl">
                Category <span className="text-red-600">*</span>
              </label>

              <select
                name="category"
                id="category"
                {...register("category", { required: true })}
                className="w-full p-[14px] bg-slate-600 outline-none  duration-150 delay-100 ease-linear rounded mt-2"
              >
                <option value="select" defaultChecked hidden>
                  Select category
                </option>
                {videoCategories.map((category, idx) => (
                  <option key={idx} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="public" className="text-xl">
                Public In
              </label>
              <input
                type="datetime-local"
                // {...register("publicIn")}
                className="w-full p-3 bg-slate-700/50  outline-none border-blue-900 focus:border duration-150 delay-100 ease-linear rounded mt-2"
                id="public "
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
            <div className="space-y-2 space-x-2">
              <p>Show in Banner</p>
              <input
                type="radio"
                name="showInBanner"
                value={"show"}
                id="show"
                // {...register("showInBanner")}
              ></input>
              <label htmlFor="show">Show</label>
              <input
                type="radio"
                name="showInBanner"
                // {...register("showInBanner")}
                value={"hide"}
                id="hide"
              />
              <label htmlFor="hide">Hide</label>
            </div>
            <div className="space-y-2 space-x-2">
              <p>
                Visibility <span className="text-red-600">*</span>
              </p>
              <input
                type="radio"
                name="visibility"
                value={"visible"}
                // {...register("visibility")}
                id="Visible"
              ></input>
              <label htmlFor="Visible">Visible</label>
              <input
                type="radio"
                name="visibility"
                value={"hidden"}
                // {...register("visibility")}
                id="Hidden"
              />
              <label htmlFor="Hidden">Hidden</label>
            </div>
          </div>
          <div>
            <label htmlFor="tags" className="text-xl">
              Tags <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("tags", { required: true })}
              className="w-full p-3 bg-slate-700/50  outline-none border-blue-900 focus:border duration-150 delay-100 ease-linear rounded mt-2"
              placeholder="Every tags must be sapareted by commas "
              id="tags"
            />
          </div>
          <div>
            <textarea
              // {...register("description")}
              className="w-full p-3 bg-slate-700/50  outline-none border-blue-900 focus:border duration-150 delay-100 ease-linear rounded mt-2"
              placeholder="Details About video"
              rows="5"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Add Video"
            className="bg-blue-600 px-4 w-full py-2 rounded text-xl  ml-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default AddVideo;
