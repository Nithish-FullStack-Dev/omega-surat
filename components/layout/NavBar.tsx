"use client";

import { useState, useEffect } from "react";
import {
  Ambulance,
  PhoneCall,
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  cancerTypes,
  centreOfExcellence,
  ourServices,
} from "../constants/NavContent";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <section className="sticky left-0 right-0 top-0 bg-white z-50 shadow-md">
        {/* Top Bar */}
        <nav className="relative flex items-center justify-between border-b px-6 py-4 flex-wrap">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/logo.webp"
              alt="Omega Hospitals logo"
              width={144}
              height={64}
            />
          </div>

          {/* Center Select - Absolutely centered on desktop */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <select className="border border-gray-300 px-4 py-2 rounded-sm text-sm min-w-[240px]">
              <option>Please Select a Center</option>
              <option value="omega-hospitals-gachibowli">
                Omega Hospitals Gachibowli
              </option>
              <option value="omega-hospitals-vizag">
                Omega Hospitals Vizag
              </option>
              <option value="omega-hospitals-guntur">
                Omega Hospitals Guntur
              </option>
              <option value="omega-hospitals-bhimavaram">
                Omega Hospitals Bhimavaram
              </option>
              <option value="omega-hospitals-jabalpur">
                Omega Hospitals Jabalpur
              </option>
              <option value="omega-hospitals-kurnool">
                Omega Hospitals Kurnool
              </option>
              <option value="omega-hospitals-surat">
                Omega Hospitals Surat
              </option>
              <option value="omega-hospitals-banjarahills">
                Omega Hospitals Banjarahills
              </option>
              <option value="omega-hospitals-karimnagar">
                Omega Hospitals Karimnagar
              </option>
              <option value="omega-hospitals-dehradun">
                Omega Hospitals Dehradun
              </option>
              <option value="omega-hospitals-tirupati">
                Omega Hospitals Tirupati
              </option>
            </select>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="border-[#e56e1b] border py-2 px-5 rounded-3xl">
              <a href="#" className="text-[#e56e1b] text-sm font-medium">
                Request a Callback
              </a>
            </div>
            <div className="lg:flex items-center hidden">
              <div className="bg-[#289eb0] py-2 px-4 rounded-tl-lg rounded-bl-lg text-white text-[12px]">
                <p>For Appointments</p>
                <div className="flex gap-1 items-center">
                  <PhoneCall size={15} /> 040 25552555
                </div>
              </div>
              <div className="bg-[#e6701c] py-2 px-4 rounded-tr-lg rounded-br-lg text-white text-[12px]">
                <p>Emergency</p>
                <div className="flex gap-1 items-center">
                  <Ambulance size={15} /> 98490 22121
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Navigation Menu */}
        <div className="border-b">
          <div className="flex items-center justify-between px-6 py-3 lg:flex-row flex-col">
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-white text-sm font-medium"
                    )}
                  >
                    Centre of Excellence
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-275 grid-cols-4 gap-x-10 gap-y-4 p-6">
                      {centreOfExcellence.map((item) => (
                        <li key={item}>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block border-b border-[#e56e1b] pb-2 text-sm font-medium text-gray-800 transition-all duration-200"
                            >
                              {item}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-sm font-medium "
                    )}
                  >
                    Our Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[300px] p-6 space-y-3">
                      {ourServices.map((item) => (
                        <li key={item}>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block text-sm font-medium text-gray-800 hover:text-[#e56e1b] transition-colors"
                            >
                              {item}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-transparent focus:bg-transparent text-sm font-medium hover:text-[#e56e1b]"
                    )}
                    asChild
                  >
                    <Link href="#">Knowledge Centre</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-transparent focus:bg-transparent text-sm font-medium hover:text-[#e56e1b]"
                    )}
                    asChild
                  >
                    <Link href="#">Cancer Journey</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-transparent focus:bg-transparent text-sm font-medium hover:text-[#e56e1b]"
                    )}
                    asChild
                  >
                    <Link href="#">Blogs</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-sm font-medium "
                    )}
                  >
                    Cancer
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[900px] grid-cols-4 gap-x-12 gap-y-3 p-6">
                      {cancerTypes.map((item) => (
                        <li key={item}>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block text-sm font-medium text-gray-800 hover:text-[#e56e1b] transition-colors"
                            >
                              {item}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-transparent focus:bg-transparent text-sm font-medium hover:text-[#e56e1b]"
                    )}
                    asChild
                  >
                    <Link href="#">About Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-transparent focus:bg-transparent text-sm font-medium hover:text-[#e56e1b]"
                    )}
                    asChild
                  >
                    <Link href="#">FAQs</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-transparent focus:bg-transparent text-sm font-medium hover:text-[#e56e1b]"
                    )}
                    asChild
                  >
                    <Link href="#">News and Media</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuViewport />
            </NavigationMenu>

            {/* Right-side controls */}
            <div className="flex items-center gap-8 w-full lg:w-auto">
              {/* Desktop icons */}
              <div className="hidden lg:flex items-center gap-8 text-gray-700">
                <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-[#e56e1b] transition-colors" />
                <Search className="w-6 h-6 cursor-pointer hover:text-[#e56e1b] transition-colors" />
                <User className="w-6 h-6 cursor-pointer hover:text-[#e56e1b] transition-colors" />
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden ml-auto"
              >
                <Menu className="w-8 h-8 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-white transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <Image
            src="/images/logo.webp"
            alt="Omega Hospitals logo"
            width={144}
            height={64}
          />
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="w-8 h-8 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-8">
            <Accordion type="multiple">
              <AccordionItem value="centre">
                <AccordionTrigger className="text-lg font-medium py-3">
                  Centre of Excellence
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-6 pt-2">
                    {centreOfExcellence.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base text-gray-700 hover:text-[#e56e1b] transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services">
                <AccordionTrigger className="text-lg font-medium py-3">
                  Our Services
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2 pl-4">
                    {ourServices.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-base text-gray-700 hover:text-[#e56e1b] transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cancer">
                <AccordionTrigger className="text-lg font-medium py-3">
                  Cancer
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-6 pt-2">
                    {cancerTypes.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base text-gray-700 hover:text-[#e56e1b] transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Plain menu items */}
            <div className="mt-8 space-y-6 border-t pt-8">
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-800 hover:text-[#e56e1b] transition-colors"
              >
                Knowledge Centre
              </Link>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-800 hover:text-[#e56e1b] transition-colors"
              >
                Cancer Journey
              </Link>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-800 hover:text-[#e56e1b] transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-800 hover:text-[#e56e1b] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-800 hover:text-[#e56e1b] transition-colors"
              >
                FAQs
              </Link>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-800 hover:text-[#e56e1b] transition-colors"
              >
                News and Media
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
