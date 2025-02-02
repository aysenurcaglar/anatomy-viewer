import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { Loader } from "lucide-react";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export function ModelViewer({ modelUrl }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full aspect-square bg-slate-100 rounded-lg overflow-hidden"
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
        <Canvas>
          <Stage environment="city" intensity={0.5}>
            <Model url={modelUrl} />
          </Stage>
          <OrbitControls autoRotate={!hovered} />
        </Canvas>
      </Suspense>
    </div>
  );
}
