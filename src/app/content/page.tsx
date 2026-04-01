"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Nav, Section, CanvasLoader, StarField } from "../components";
import { Canvas } from "@react-three/fiber";

import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Content = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "resume";

  const renderPage = () => {
    switch (page) {
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "resume":
      default:
        return <Resume />;
    }
  };

  return (
    <Section className="bg-black text-white font-jetBrains">
      <Nav absolute />

      {renderPage()}

      <Canvas
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ height: "100vh", width: "100vw" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <StarField count={8000} />
        </Suspense>
      </Canvas>
    </Section>
  );
};

export default Content;
