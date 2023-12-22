"use server";
export async function getBanner() {
  const res = await fetch("http://localhost:5000/videos?showInBanner=show");
  const data = await res.json();
  return data;
}
