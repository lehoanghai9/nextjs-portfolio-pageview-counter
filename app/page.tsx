import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Hai Le Hoang
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <Badge>
          <h2 className="text-sm text-zinc-500 ">
            I'm building{" "}
            <Link
              target="_blank"
              href="https://boppo.hu"
              className="underline duration-500 hover:text-zinc-300"
            >
              boppo.hu
            </Link>{" "}
            , an online multi-vendor marketplace application.
          </h2>
        </Badge>
      </div>
    </div>
  );
}

const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-800">
      <svg
        viewBox="0 0 6 6"
        aria-hidden="true"
        className="h-1.5 w-1.5 fill-green-400"
      >
        <circle r={3} cx={3} cy={3} />
      </svg>
      {children}
    </span>
  );
};
