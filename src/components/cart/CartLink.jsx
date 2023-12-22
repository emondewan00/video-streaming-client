import Link from "next/link";

const CartLink = () => {
  return (
    <Link
      onClick={() => postData(video._id)}
      href={`/video/${video?._id}`}
      className="absolute top-0 left-0 w-full h-full rounded "
    ></Link>
  );
};

export default CartLink;
