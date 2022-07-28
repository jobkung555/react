import React, { useEffect, Suspense, useState, useRef } from 'react'
import styled from 'styled-components'

import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei/core'
import gsap from 'gsap'
// import PhoneModel from '../../assets/three/models/Phone/phone.gltf'

// import img from '../../assets/three/textures/door/color.jpg'
// import Phone from './components/Phone'

import { PhoneModel } from './components/Phone'

const Canvashidden = styled.div`
  overflow: hidden;
  display: flex;
  /* background: #000; */
`

const Menu = styled.div`
  position: fixed;
  bottom: 20px;
  width: calc(100vw - 40px);
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0 20px;
`
const Btn = styled.button`
  width: 100px;
  aspect-ratio: 1;
  border-radius: 100px;
  border: 5px solid #444444;
  background: ${prop => prop.color};
  cursor: pointer;
`

const MenuLeft = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0 20px;
`

const Secneall = ({ ...prop }) => {

  useFrame((state, delta) => {
    // let t = state.clock.getElapsedTime();
  });
  const cameraRef = useRef(null)

  useEffect(() => {
    if (!!cameraRef.current && prop.content == 1) {
      gsap.to(cameraRef.current.rotation, {
        y: Math.PI * 1,
        duration: 2,
        ease: 'easeOut'
      })
      gsap.to(cameraRef.current.position, {
        z: -2,
        y: 6,
        duration: 2,
        ease: 'easeOut'
      })
    } else if (!!cameraRef.current && prop.content == 0) {
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



  }, [cameraRef.current, prop.content])
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

      <PhoneModel color={prop.color} />
    </>
  )
}

const Phone = () => {
  const [colorMaterial, setColorMaterial] = useState('#000000')
  const [content, setContent] = useState(0)
  useEffect(() => {

  }, [])

  return (
    <>
      <Canvashidden>
        <Suspense fallback={null}>
          <Canvas shadows style={{ width: '100vw', height: '100vh' }}>
            <Secneall color={colorMaterial} content={content} />
          </Canvas>
        </Suspense>
        <Menu>
          <Btn color={'#000000'} onClick={() => setColorMaterial('#000000')}></Btn>
          <Btn color={'#FF0000'} onClick={() => setColorMaterial('#FF0000')}></Btn>
          <Btn color={'#00FF00'} onClick={() => setColorMaterial('#00FF00')}></Btn>
          <Btn color={'#0000FF'} onClick={() => setColorMaterial('#0000FF')}></Btn>
          <Btn color={'#FFFFFF'} onClick={() => setColorMaterial('#FFFFFF')}></Btn>
        </Menu>
        <MenuLeft>
          <Btn onClick={() => setContent(0)}>Front</Btn>
          <Btn onClick={() => setContent(1)}>Back</Btn>
        </MenuLeft>
      </Canvashidden>
    </>
  )
}

export default Phone