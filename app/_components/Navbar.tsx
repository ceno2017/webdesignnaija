import Link from "next/link";
import GetSession from "./getSession";
import MobileMenu from "@/app/_components/MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Webplan
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/locationBased">Our Locations</Link>
          <Link
            href="https://wa.me/2347012585759?text=Hello%20Charles,%20I%20would%20like%20to%20hire%20you%20for%20a%20web%20design%20project."
            target="_blank"
          >
            Contact
          </Link>
        </nav>

        {/* Auth (Server Component) */}
        <GetSession />

        {/* Mobile Menu (Client Component) */}
        <MobileMenu />
      </div>
    </header>
  );
}
