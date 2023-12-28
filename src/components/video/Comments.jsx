

const Comments = () => {
  return (
    <>
      {/* all comments */}
      <div className="comment order-3">
        <h2 className="text-xl my-4">200 conmments </h2>
        <div className="flex items-center mt-2 gap-x-2">
          <img
            src="https://i.ibb.co/LnLzgx3/17.jpg"
            className="h-10 w-10 bg-cover object-cover rounded-full"
            alt=""
          />
          <form className="grow">
            <input
              className="w-full p-2 bg-slate-700/50  outline-none border-blue-900 focus:border duration-150 delay-100 ease-linear rounded "
              type="text"
              placeholder="Add a comment... "
            />
          </form>
        </div>
        <div className="all-comments ">
          <div className="flex gap-x-2 mt-2">
            <img
              src="https://i.ibb.co/LnLzgx3/17.jpg"
              className="h-10 w-10 bg-cover object-cover rounded-full self-start"
              alt=""
            />
            <div>
              <p className="">
                @emonHossain <span className="text-sm">1 year ago</span>
              </p>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex gap-x-2 mt-2">
            <img
              src="https://i.ibb.co/LnLzgx3/17.jpg"
              className="h-10 w-10 bg-cover object-cover rounded-full self-start"
              alt=""
            />
            <div>
              <p className="">
                @emonHossain <span className="text-sm">1 year ago</span>
              </p>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex gap-x-2 mt-2">
            <img
              src="https://i.ibb.co/LnLzgx3/17.jpg"
              className="h-10 w-10 bg-cover object-cover rounded-full self-start"
              alt=""
            />
            <div>
              <p className="">
                @emonHossain <span className="text-sm">1 year ago</span>
              </p>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex gap-x-2 mt-2">
            <img
              src="https://i.ibb.co/LnLzgx3/17.jpg"
              className="h-10 w-10 bg-cover object-cover rounded-full self-start"
              alt=""
            />
            <div>
              <p className="">
                @emonHossain <span className="text-sm">1 year ago</span>
              </p>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
