import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, Suspense } from "react";
import * as THREE from "three";

function Shard({ position, scale, color, rotation }) {
  const geom = useMemo(() => new THREE.OctahedronGeometry(1, 0), []);
  return (
    <mesh position={position} scale={scale} rotation={rotation} geometry={geom}>
      <meshPhysicalMaterial
        color={color}
        roughness={0.18}
        metalness={0.55}
        transmission={0.22}
        thickness={0.6}
        iridescence={0.4}
        iridescenceIOR={1.3}
      />
    </mesh>
  );
}

function Cluster({ dimmed = false }) {
  const shards = useMemo(
    () => [
      { position: [0, 0, 0], scale: [1.15, 2.1, 0.55], color: "#17B3A3", rotation: [0.3, 0.4, 0.2] },
      { position: [0.85, 0.35, -0.2], scale: [0.7, 1.4, 0.35], color: "#8A4A84", rotation: [-0.4, 0.6, 0.1] },
      { position: [-0.75, -0.2, 0.15], scale: [0.55, 1.2, 0.3], color: "#4F8FBA", rotation: [0.5, -0.3, 0.4] },
      { position: [0.2, -0.85, 0.35], scale: [0.45, 0.9, 0.25], color: "#17B3A3", rotation: [0.1, 1.1, -0.2] },
      { position: [-0.15, 0.95, -0.3], scale: [0.4, 0.85, 0.22], color: "#8A4A84", rotation: [-0.6, 0.2, 0.5] },
    ],
    []
  );

  return (
    <Float speed={dimmed ? 0.6 : 1.2} rotationIntensity={dimmed ? 0.2 : 0.55} floatIntensity={dimmed ? 0.3 : 0.7}>
      <group scale={dimmed ? 0.72 : 1}>
        {shards.map((s, i) => (
          <Shard key={i} {...s} />
        ))}
      </group>
    </Float>
  );
}

export default function ShardScene({ dimmed = false, className = "" }) {
  return (
    <div className={className}>
      <Suspense fallback={<div className="h-full w-full bg-ocean-900/40" />}>
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={dimmed ? 0.25 : 0.45} />
          <directionalLight position={[4, 3, 6]} intensity={dimmed ? 0.6 : 1.15} color="#17B3A3" />
          <directionalLight position={[-5, -2, 3]} intensity={dimmed ? 0.4 : 0.85} color="#8A4A84" />
          <Cluster dimmed={dimmed} />
        </Canvas>
      </Suspense>
    </div>
  );
}
