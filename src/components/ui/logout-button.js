"use server";

import { DoorOpen } from "lucide-react";
import { Button } from "./button";
import { lucia, validateRequest } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogoutButton() {
  return (
    <div>
      <form action={logout}>
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="lg:w-full w-[40px] items-center transform transition-transform duration-300 hover:scale-[1.02] bg-transparent text-[#000000] hover:bg-transparent lg:mx-4 mx-0"
          aria-label="Account"
        >
          <div className="w-full font-[600] flex flex-row lg:justify-start gap-2 items-center justify-center">
            <DoorOpen className="size-5" />
            <p className="lg:flex hidden">Logout</p>
          </div>
        </Button>
      </form>
    </div>
  );
}

async function logout() {
  "use server";
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/admin/blog");
}
