import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './Experience'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

const App = () => {
  return (
    <div id="canvas-container" className='fixed top-0 left-0 w-full h-full'>
    <Canvas
    shadows
    
    camera={{
      fov:45,
      near: 0.1,
      far:200,
      position : [0,-8,15]
    }}
    >
      <Experience />
      <OrbitControls makeDefault />
      <Perf position="top-left" />
    </Canvas>
    </div>
  )
}

export default App