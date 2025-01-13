import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { Loader } from "lucide-react";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

interface ModelViewerProps {
  modelUrl: string;
}

export function ModelViewer({ modelUrl }: ModelViewerProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <Loader className="w-8 h-8 animate-spin" />
          </div>
        }
      >
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
          <Stage environment="city" intensity={0.5}>
            <Model url={modelUrl} />
          </Stage>
          <OrbitControls autoRotate={!hovered} />
        </Canvas>
      </Suspense>
    </div>
  );
}
