"use server";

import { fetchWrapper } from "./fetch-wrapper";
import { revalidatePath } from "next/cache";
// import { ProfileModel } from "@/app/(main)/(profile)/_types/profile.types";

export async function editProfileAction(model :any

  // : ProfileModel

) {
  return fetchWrapper(
    `/v1/users`,
    {
      method: "PUT",
      body: JSON.stringify(model),
      headers: {
        "Content-Type": "application/json"
      }
    },
    {
      responsible: true,
      onSuccess: () => {
        revalidatePath("/profile");
      }
    }
  );
}
