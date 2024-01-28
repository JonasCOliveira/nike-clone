"use client";
import { React, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";

import Pointer from "../Pointer";
import { useStore } from "../../Store";

import * as THREE from "three";

function Nike() {
  const nike = useGLTF("./nike/nike_pegasus_shoe.glb");

  const camera = useRef();
  const ref = useRef();
  const store = useStore();

  useHelper(camera, THREE.CameraHelper);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 4) / 8,
      -0.2 - (1 + Math.sin(t / 1.5)) / 20
    );
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group ref={ref}>
      {/* <PerspectiveCamera ref={camera} near={1} far={100} position={[0, 0, 0]}> */}
      <circleGeometry args={[1, 64, 64]} />
      <mesh receiveShadow castShadow scale={100}>
        <primitive
          onPointerOver={(e) => (store.open = true)}
          onPointerOut={() => {
            store.open = false;
          }}
          object={nike.scene}
          position={[0, 0, -20]}
        ></primitive>
      </mesh>
      {/* </PerspectiveCamera> */}
    </group>
  );
}

function NikeCanvas() {
  return (
    <Canvas shadows camera={[0, 0, 0]}>
      <ambientLight intensity={1} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={3} position={[5, 5, 5]} />
      <spotLight
        position={[10, 15, -5]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Suspense fallback={null}>
        <Pointer>
          <Nike />
        </Pointer>
      </Suspense>
      {/* <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      /> */}
    </Canvas>
  );
}

export default NikeCanvas;
