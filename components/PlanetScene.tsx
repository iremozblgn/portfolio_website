"use client";

import { Component, type ErrorInfo, type ReactNode, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

type PlanetSceneProps = {
  reducedMotion: boolean;
};

function PlanetSystem({ reducedMotion }: PlanetSceneProps) {
  const system = useRef<THREE.Group>(null);
  const planet = useRef<THREE.Mesh>(null);
  const satellites = useRef<THREE.Group>(null);
  const rings = useRef<THREE.Group>(null);
  const rotation = useRef({ x: -0.08, y: 0, vx: 0, vy: 0 });

  useFrame((state, rawDelta) => {
    if (
      !system.current ||
      !planet.current ||
      !satellites.current ||
      !rings.current
    )
      return;

    const delta = Math.min(rawDelta, 1 / 30);
    const targetX = reducedMotion ? -0.08 : -0.08 - state.pointer.y * 0.18;
    const targetY = reducedMotion ? 0 : state.pointer.x * 0.28;
    const spring = 9;
    const damping = Math.exp(-7 * delta);

    rotation.current.vx =
      (rotation.current.vx + (targetX - rotation.current.x) * spring * delta) *
      damping;
    rotation.current.vy =
      (rotation.current.vy + (targetY - rotation.current.y) * spring * delta) *
      damping;
    rotation.current.x += rotation.current.vx;
    rotation.current.y += rotation.current.vy;

    system.current.rotation.x = rotation.current.x;
    system.current.rotation.y = rotation.current.y;

    if (!reducedMotion) {
      system.current.rotation.z += delta * 0.035;
      planet.current.rotation.y += delta * 0.075;
      satellites.current.rotation.z -= delta * 0.09;
      rings.current.rotation.y += delta * 0.018;
    }

    satellites.current.position.x = state.pointer.x * 0.035;
    satellites.current.position.y = state.pointer.y * 0.025;
  });

  return (
    <group ref={system} rotation={[-0.08, 0, -0.3]}>
      <mesh ref={planet} castShadow receiveShadow renderOrder={2}>
        <sphereGeometry args={[1.22, 96, 96]} />
        <meshPhysicalMaterial
          color="#f4eff5"
          roughness={0.08}
          metalness={0}
          transmission={0.88}
          thickness={1.65}
          ior={1.32}
          attenuationColor="#d8c7e2"
          attenuationDistance={3.6}
          clearcoat={1}
          clearcoatRoughness={0.08}
          sheen={0.85}
          sheenColor="#e7bfd0"
          iridescence={0.72}
          iridescenceIOR={1.25}
          iridescenceThicknessRange={[120, 540]}
        />
      </mesh>

      <mesh scale={0.72}>
        <sphereGeometry args={[1.22, 64, 64]} />
        <meshBasicMaterial
          color="#fff4ed"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <group ref={rings}>
        <mesh rotation={[Math.PI / 2, 0.12, 0.1]}>
          <torusGeometry args={[1.72, 0.012, 8, 256]} />
          <meshPhysicalMaterial
            color="#cfaea8"
            metalness={0.45}
            roughness={0.24}
            transparent
            opacity={0.72}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2.75, 0.55, -0.42]}>
          <torusGeometry args={[1.92, 0.009, 8, 256]} />
          <meshPhysicalMaterial
            color="#d8ccea"
            metalness={0.2}
            roughness={0.3}
            transparent
            opacity={0.58}
          />
        </mesh>
        <mesh rotation={[Math.PI / 1.8, -0.38, 0.68]}>
          <torusGeometry args={[2.08, 0.007, 8, 256]} />
          <meshPhysicalMaterial
            color="#d6b982"
            metalness={0.55}
            roughness={0.24}
            transparent
            opacity={0.48}
          />
        </mesh>
      </group>

      <group ref={satellites}>
        <mesh position={[1.7, 0.3, 0.22]} castShadow>
          <sphereGeometry args={[0.115, 24, 24]} />
          <meshPhysicalMaterial
            color="#cab5d4"
            metalness={0.35}
            roughness={0.16}
            clearcoat={1}
          />
        </mesh>
        <mesh position={[-1.88, -0.2, -0.78]} castShadow>
          <sphereGeometry args={[0.072, 20, 20]} />
          <meshPhysicalMaterial
            color="#e4bdb5"
            metalness={0.3}
            roughness={0.18}
            clearcoat={1}
          />
        </mesh>
        <mesh position={[0.55, 1.94, -0.12]} castShadow>
          <sphereGeometry args={[0.052, 20, 20]} />
          <meshPhysicalMaterial
            color="#d8c493"
            metalness={0.48}
            roughness={0.16}
            clearcoat={1}
          />
        </mesh>
      </group>
    </group>
  );
}

class WebGLErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn(
      "The 3D hero could not start; using the static fallback.",
      error,
      info,
    );
  }

  render() {
    return this.state.failed ? (
      <div className="planet-fallback" aria-hidden="true" />
    ) : (
      this.props.children
    );
  }
}

export default function PlanetScene({ reducedMotion }: PlanetSceneProps) {
  return (
    <WebGLErrorBoundary>
      <Canvas
        aria-label="Interactive pearlescent planet with orbiting rings"
        camera={{ position: [0, 0.2, 6.2], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        shadows={!reducedMotion}
      >
        <ambientLight intensity={1.55} color="#fff9f3" />
        <directionalLight
          position={[4, 5, 5]}
          intensity={2.7}
          color="#fff5e9"
          castShadow
        />
        <pointLight
          position={[-4, 1.5, 3]}
          intensity={22}
          distance={9}
          color="#c7b6ee"
        />
        <pointLight
          position={[3, -2, 2]}
          intensity={13}
          distance={7}
          color="#efbeb5"
        />
        <Float
          speed={reducedMotion ? 0 : 0.55}
          rotationIntensity={0.05}
          floatIntensity={0.16}
        >
          <PlanetSystem reducedMotion={reducedMotion} />
        </Float>
        {!reducedMotion && (
          <Sparkles
            count={18}
            scale={[5.2, 3.5, 2]}
            size={1.5}
            speed={0.12}
            color="#b5a3ca"
            opacity={0.35}
          />
        )}
      </Canvas>
    </WebGLErrorBoundary>
  );
}
