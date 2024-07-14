import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

const Experience = () => {

  const knotRef = useRef();

   useFrame((state, delta)=>{
    // console.log(state)
    knotRef.current.rotation.y += delta
   })

  return (
   <>
   
   <mesh ref={knotRef}>
        <torusKnotGeometry scale={1} />
        <meshBasicMaterial wireframe  color="mediumpurple" />
    </mesh>

    <mesh position-y={-2} scale={10} rotation-x={-Math.PI * 0.25}>
        <planeGeometry  />
        <meshBasicMaterial color="yellow" />    
    </mesh>
   </>
  )
}

export default Experience