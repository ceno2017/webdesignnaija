import Link from "next/link";
import { ReactElement } from "react";

export function ButtonLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
    >
      {children}
    </Link>
  );
}
