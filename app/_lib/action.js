"use server";

import { signIn, signOut } from "./auth";

export async function signinAction() {
  await signIn("google", {
    redirectTo: "/portfolio",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}
