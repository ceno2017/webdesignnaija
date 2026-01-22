"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Webplan
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="font-medium" asChild>
                <Link href="/products">Services</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="font-medium" asChild>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="font-medium" asChild>
                <Link href="/contact">Contacts</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Login</Button>
          <Button className="rounded-xl">Pay for Service</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <nav className="flex flex-col gap-6 mt-10">
              <Link href="/" className="text-lg font-medium">
                Home
              </Link>
              <Link href="/products" className="text-lg font-medium">
                Services
              </Link>
              <Link href="/about" className="text-lg font-medium">
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium">
                Contact
              </Link>
              <Button className="mt-6 rounded-xl">Shop Now</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
