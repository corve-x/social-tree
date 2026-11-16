"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/** Three nested rings on different axes — a quiet, architectural gyroscope. */
function Rings({ reduced }: { reduced: boolean }) {
  const spin = useRef<THREE.Group>(null);
  const tilt = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const viewport = useThree((s) => s.viewport);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, dt) => {
    if (reduced || !spin.current || !tilt.current) return;
    const t = state.clock.elapsedTime;
    spin.current.rotation.y = t * 0.035;
    spin.current.rotation.z = Math.sin(t * 0.05) * 0.12;
    tilt.current.rotation.x = THREE.MathUtils.damp(
      tilt.current.rotation.x,
      0.35 + pointer.current.y * 0.12,
      2.2,
      dt,
    );
    tilt.current.rotation.y = THREE.MathUtils.damp(
      tilt.current.rotation.y,
      pointer.current.x * 0.18,
      2.2,
      dt,
    );
  });

  const scale = THREE.MathUtils.clamp(viewport.width / 5.2, 0.6, 1.2);

  const material = (
    <meshStandardMaterial
      color="#b9b9be"
      metalness={1}
      roughness={0.3}
      envMapIntensity={1.1}
    />
  );

  return (
    <group ref={tilt} scale={scale} rotation={[0.35, 0, 0]}>
      <group ref={spin}>
        <mesh>
          <torusGeometry args={[2.3, 0.07, 48, 220]} />
          {material}
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.95, 0.09, 48, 200]} />
          {material}
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[1.6, 0.11, 48, 180]} />
          {material}
        </mesh>
      </group>
    </group>
  );
}

export default function BackgroundScene() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7.5], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      frameloop={reduced ? "demand" : "always"}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.12} />
      <directionalLight position={[4, 5, 3]} intensity={0.6} />
      {/* Procedural studio lighting — no external HDR download */}
      <Environment resolution={256} frames={1}>
        <Lightformer
          form="rect"
          intensity={2.4}
          position={[0, 5, -4]}
          scale={[12, 3, 1]}
        />
        <Lightformer
          form="rect"
          intensity={1.2}
          position={[-6, 0, 2]}
          rotation-y={Math.PI / 2}
          scale={[8, 2, 1]}
        />
        <Lightformer
          form="rect"
          intensity={0.8}
          position={[6, -1, -3]}
          rotation-y={-Math.PI / 2}
          scale={[8, 2, 1]}
        />
      </Environment>
      <Rings reduced={reduced} />
    </Canvas>
  );
}
