import React from 'react';
import { ARButton, XR } from '@react-three/xr'
import { Canvas } from "@react-three/fiber";
import XrCube from './XrCube';

const XrCubeContainer = () => {

  return (
    <>
      <ARButton />
      <Canvas>
        <XR>  
          <XrCube />
        </XR>
      </Canvas>
    </>
  )
}

export default XrCubeContainer
