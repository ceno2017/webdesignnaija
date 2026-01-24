import Link from "next/link";
import Image from "next/image";

import { auth } from "@/app/_lib/auth";
import { Button } from "../../components/ui/button";
import SignOutButton from "@/app/_components/SignOutButton";

async function GetSession() {
  const session = await auth();

  return (
    <div className="hidden md:flex items-center gap-4">
      {session?.user?.image ? (
        <>
          <Link
            href="/account"
            className="hover::text-accent-400 transition-colors rounded-3xl flex items-center gap-4"
          >
            <Image
              src={session.user.image}
              className="rounded-3xl"
              alt="Logged in user"
              width={40}
              height={40}
            />
          </Link>
          <Link
            href="/api/auth/signout"
            className="hover::text-accent-400 transition-colors flex items-center gap-4"
          >
            <SignOutButton />
          </Link>
        </>
      ) : (
        <Link
          href="/api/auth/signin"
          className="hover::text-accent-400 transition-colors"
        >
          <Button variant="ghost">Login</Button>
        </Link>
      )}
    </div>
  );
}

export default GetSession;
