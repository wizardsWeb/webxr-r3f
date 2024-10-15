import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react'

const XrCube = () => {

  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  })

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {/* Basically for everything we need 2 things a geometry and material */}
      <mesh ref={cubeRef} position-z={-5}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={'mediumpurple'} />
      </mesh>
    </>
  )
}

export default XrCube
