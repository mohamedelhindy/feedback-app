import { supabase } from "./client";

export async function getFeedbacks() {
  const { data, error } = await supabase.from("feedbacks").select("*");

  if (error) {
    console.error("Supabase error:", error);
    return [];
  }

  return data;
}
