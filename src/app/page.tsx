"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation"; // Adjust if needed
// Ensure this path is correct
import Image from "next/image";

export default function HeroScrollDemo() {
  // Change to default export
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Drug abuse is <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                DANGEROUS
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/drug.png`} // Ensure this path is correct
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}