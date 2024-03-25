import React from 'react';
import { Canvas } from '@react-three/fiber';

function GasketPoints() {
  return (
    <Canvas style={{ background: 'white' }}>
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={['attributes', 'position']}
            count={3}
            array={new Float32Array([
              -0.5, -0.5, 0,
               0.5, -0.5, 0,
               0,  0.5, 0
            ])}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial attach="material" size={100} sizeAttenuation={false} color="black" />
      </points>
    </Canvas>
  );
}

export default GasketPoints;
