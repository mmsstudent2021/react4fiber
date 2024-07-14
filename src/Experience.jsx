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

   <ambientLight intensity={0.5} />
   <directionalLight
   

   castShadow
   intensity={1.5}
   shadow-mapSize-width={1024}
   shadow-mapSize-height={1024}
   position={[1,5,4]}
   />
   
   <mesh castShadow ref={knotRef}>
        <torusKnotGeometry scale={1} />
        <meshStandardMaterial   color="mediumpurple" />
    </mesh>

    <mesh receiveShadow position-y={-2} scale={10} rotation-x={-Math.PI * 0.25}>
        <planeGeometry  />
        <meshStandardMaterial color="yellow" />    
    </mesh>
   </>
  )
}

export default Experience