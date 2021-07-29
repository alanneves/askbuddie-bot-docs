import React from 'react';
import Wave from '@svgs/wave.svg';
import Ellipses from '@svgs/heroEllipses.svg';
import Button from '@components/Button';
import Heading from '@components/Heading';

export default function Hero() {
  return (
    <main className="relative">
      <div className="container relative heroContainer flex items-center justify-between">
        <div>
          <Heading modifier="mb-6">
            Ask Buddie&apos;s
            <span className="text-brand-400 mt-4 font-bold block">
              Bot Buddy !
            </span>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            qui.
          </p>
          <Button modifier="mt-12 relative pointer">Get Sexy!</Button>
        </div>
        <div>
          <img src="/imgs/logo-full.png" alt="" className="relative z-10" />
          <Ellipses className="absolute w-1/2 bottom-0 right-0" />
        </div>
      </div>
      <Wave className="max-h-screen-sm absolute -z-1 -bottom-16 left-0" />
    </main>
  );
}
