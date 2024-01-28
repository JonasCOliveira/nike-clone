"use client";
import { React, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";

import { easing } from "maath";
import { useStore } from "../Store";

export default function Pointer({ children }) {
  const ref = useRef();
  const store = useStore();

  useFrame(({ viewport, camera, pointer, clock }, delta) => {
    // console.log(store.open);
    // const a = clock.getElapsedTime();
    // ref.current.rotation.x = a;
  });

  return (
    <>
      <group>
        {children}

        <mesh ref={ref}>
          {/* <circleGeometry args={[1, 64, 64]} />
          <MeshTransmissionMaterial
            samples={16}
            resolution={512}
            anisotropy={1}
            thickness={0.1}
            roughness={0.4}
            toneMapped={true}
          /> */}
        </mesh>
      </group>
    </>
  );
}
