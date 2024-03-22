import React, { useEffect, Suspense, useState, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei/core'
import gsap from 'gsap'
// import TowerModel from '../../assets/three/models/Tower/Tower.gltf'

// import img from '../../assets/three/textures/door/color.jpg'
// import Tower from './components/Tower'

import { TowerModel } from './components/Tower'

const Canvashidden = styled.div`
  overflow: hidden;
  display: flex;
  /* background: #000; */
`

const Secneall = ({ ...prop }) => {

  useFrame((state, delta) => {
    // let t = state.clock.getElapsedTime();
  });
  const cameraRef = useRef(null)

  useEffect(() => {
    if (!!cameraRef.current && prop.content === 1) {
      gsap.to(cameraRef.current.rotation, {
        y: Math.PI,
        duration: 2,
        ease: 'easeOut'
      })
      gsap.to(cameraRef.current.position, {
        z: -2,
        y: 6,
        duration: 2,
        ease: 'easeOut'
      })
    } else if (!!cameraRef.current && prop.content === 0) {
      gsap.to(cameraRef.current.rotation, {
        y: 0,
        duration: 2,
        ease: 'easeOut'
      })
      gsap.to(cameraRef.current.position, {
        z: 7,
        y: 4.5,
        duration: 2,
        ease: 'easeOut'
      })
    }
  }, [prop.content])
  
  return (
    <>
      {/* <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} /> */}
      <PerspectiveCamera ref={cameraRef} makeDefault fov={50} position={[0, 4.5, 7]} rotation={[0, 0, 0]} />
      {/* <PerspectiveCamera ref={cameraRef} makeDefault fov={50} position={[-0.5, 6, -2]} rotation={[0, Math.PI, 0]} /> */}
      <color args={[2, 34, 34]} attach="background" />
      {/* <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      /> */}
      <spotLight
        color={[1, 1, 1]}
        intensity={1}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 15, 10]}
        castShadow
        shadow-bias={-0.0001}
      />
      {/* <rectAreaLight
        width={3}
        height={3}
        color={'#FFFFFF'}
        intensity={5.6}
        position={[-2, 5, 5]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      /> */}
      {/* <pointLight position={[-5, 20, 10]} intensity={5.5} /> */}
      <pointLight position={[5, 20, -10]} intensity={1.5} />
      {/* <pointLight position={[5, 20, -10]} intensity={1.5}/> */}

      {/* <TowerModel color={prop.color} /> */}
      <TowerModel />
    </>
  )
}

const Tower = () => {
  const [colorMaterial, setColorMaterial] = useState('#000000')
  const [content, setContent] = useState(0)
  useEffect(() => {
    document.title = 'Tower'
  }, [])

  return (
    <>
      <Canvashidden className='canvasarea'>
        <Suspense fallback={null}>
          <Canvas shadows style={{ width: '100vw', height: '100vh' }}>
            <Secneall color={colorMaterial} content={content}/>
          </Canvas>
        </Suspense>
        {/* <Menu>
          <Btn color={'#000000'} onClick={() => setColorMaterial('#000000')}></Btn>
          <Btn color={'#FF0000'} onClick={() => setColorMaterial('#FF0000')}></Btn>
          <Btn color={'#00FF00'} onClick={() => setColorMaterial('#00FF00')}></Btn>
          <Btn color={'#0000FF'} onClick={() => setColorMaterial('#0000FF')}></Btn>
          <Btn color={'#FFFFFF'} onClick={() => setColorMaterial('#FFFFFF')}></Btn>
        </Menu>
        <MenuLeft>
          <Link to="/"><Btn>Home</Btn></Link>
          <Btn onClick={() => setContent(0)}>Front</Btn>
          <Btn onClick={() => setContent(1)}>Back</Btn>
        </MenuLeft> */}
      </Canvashidden>
    </>
  )
}

export default Tower