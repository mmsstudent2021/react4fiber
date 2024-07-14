import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './Experience'
import { OrbitControls } from '@react-three/drei'

const App = () => {
  return (
    <div id="canvas-container" className='fixed top-0 left-0 w-full h-full'>
    <Canvas
    
    camera={{
      fov:45,
      near: 0.1,
      far:200,
      position : [0,-8,15]
    }}
    >
      <Experience />
      <OrbitControls makeDefault />
    </Canvas>
    </div>
  )
}

export default App