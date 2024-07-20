import React from "react";
import { Button } from "@/app/components/buttons";
import { CirclesBackground } from "@/app/components/circles-background";
import { Container } from "@/app/components/container";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="mt-32">
      <Container className="relative isolate flex h-full flex-col items-center justify-center py-20 text-center sm:py-32 text-zinc-100">
        <CirclesBackground className="absolute left-1/2 top-1/2 -z-10 mt-44 w-[68.125rem] -translate-x-1/2 -translate-y-1/2 stroke-zinc-800 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]" />
        <p className="text-sm font-semibold">404</p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight text-highlight-primary ">
          Page not found
        </h1>
        <p className="mt-2 text-lg  text-zinc-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button href="/" className="mt-8 gap-2">
          Go back home
          <ArrowRight className=""/>
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
