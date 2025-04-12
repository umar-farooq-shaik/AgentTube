"use server";

import { redirect } from "next/navigation";

export async function analyseYoutubeVideo(formData) {
  const url = formData.get("url")?.toString();
  if (!url) return;

  const videoId = "abc"; // Replace this with actual logic to extract video ID
  if (!videoId) return;

  // Redirect to the new post
  redirect(`/video/${videoId}/analysis`);
}