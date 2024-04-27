import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes} = useGLTF('/Master_swordsman.glb')
  return (
<group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RurouniYasuke_32mm.geometry}
        material={nodes.RurouniYasuke_32mm.material}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/Master_swordsman.glb')
