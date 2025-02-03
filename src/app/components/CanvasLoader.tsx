import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "black",
        zIndex: 9999,
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14,
          color: "white",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
      </p>
    </Html>
  );
};

export default CanvasLoader;
