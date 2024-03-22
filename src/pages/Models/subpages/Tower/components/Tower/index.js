import React, { useEffect, useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Mesh } from "three"
import gsap from "gsap"
import { configureStore } from "@reduxjs/toolkit"

export function TowerModel({ ...prop }) {
  const gltf = useLoader(
    GLTFLoader,
    // process.env.PUBLIC_URL + "models/Phone/phone.gltf"
    process.env.PUBLIC_URL + "models/Phone/Conts.gltf"
    )

    useEffect(() => {
    // gltf.scene.scale.set(0.005, 0.005, 0.005);
    gltf.scene.position.set(0, 4, 3)
    // gltf.materials.Case.color.set(prop.color)
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true
        object.receiveShadow = true
        object.material.envMapIntensity = 20
      }
    })

    // gltf.scene.children[0].position.set(0, 5, 0);
    // gltf.scene.children[1].position.set(0, 5, 0);
    // gltf.scene.children[2].position.set(0, 5, 0);
    // gltf.scene.children[3].position.set(0, 5, 0);
    // gltf.scene.children[4].position.set(0, -5, 0);

    // gsap.to(gltf.scene.children[4].rotation, { duration: 2, x: -2, stagger: 0.3 })
    // gsap.timeline({ repeat: -1 })
    // .to(gltf.scene.children[4].position, { duration: 2, y: -2, stagger: 0.3 })
    // .to(gltf.scene.children[4].position, { duration: 2, y: 0, stagger: 0.3 })

  }, [gltf, prop])

  useEffect(() => {
    const canvasAreaPosition = document.querySelector(".canvasarea")
    console.log(canvasAreaPosition?.offsetHeight)

    
    const run = () => {
      let canvasAreaPositionTop = canvasAreaPosition?.offsetTop
      let canvasAreaPositionHeight = canvasAreaPosition?.offsetHeight
      let canvasAreaPositionArea = canvasAreaPositionTop + canvasAreaPositionHeight
      let canvasAreaPositionWidth = canvasAreaPosition?.offsetWidth
      document.onmousemove = handleMouseMoveModel;
  
      function handleMouseMoveModel(e){
        // console.log("X: ",e.pageX)
        // console.log("Y: ",e.pageY)
        if (e.pageY > canvasAreaPositionTop && e.pageY < canvasAreaPositionArea) {
          let areawidth = (canvasAreaPositionWidth / 2)
          let areaheight = (canvasAreaPositionHeight / 2)
          let Y = (((e.pageY - canvasAreaPositionTop) - areaheight) / areaheight)
          let X = ((e.pageX - areawidth) / areawidth) 
          
          let rotateY = Y * 0.03
          let rotateX = X * 0.01
          let posX = X * 0.2
          let posY = Y * 0.2
          // console.log(X)
          // console.log(Y)
          gltf.scene.rotation.set(posY, posX, 0)
        }
      }
    }
    run()
  })


  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime()
    // gltf.scene.rotation.set(0, t * 0.5, 0)
  })

  return <primitive object={gltf.scene} />
}
