"use server";
export async function getBanner() {
  const res = await fetch("https://video-streaming-api.vercel.app/videos?showInBanner=show");
  const data = await res.json();
  return data;
}
