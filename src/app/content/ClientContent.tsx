"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

import { Nav, Section, CanvasLoader, StarField } from "../components";
import { Resume, Projects, Contact, Journey } from "../components";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false },
);

const ClientContent = () => {
  return (
    <Section className="bg-black text-white font-jetBrains relative">
      <Nav absolute />

      <PageRenderer />
      <StarFieldWrapper />
    </Section>
  );
};

const StarFieldWrapper = () => {
  return (
    <Canvas
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <StarField count={8000} />
      </Suspense>
    </Canvas>
  );
};

const PageRenderer = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "resume";

  switch (page) {
    case "projects":
      return <Projects />;
    case "contact":
      return <Contact />;
    case "journey":
      return <Journey />;
    case "resume":
    default:
      return <Resume />;
  }
};

export default ClientContent;
