import React, { useEffect } from 'react'
import Publiclayout from '../../layout/Public'
import styled from 'styled-components'

import * as dat from 'dat.gui'

import * as THREE from 'three'

import gsap from 'gsap'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import Stats from 'three/examples/jsm/libs/stats.module'

import img from '../../assets/three/textures/door/color.jpg'


const Canvashidden = styled.div`
  overflow: hidden;
  display: flex;
`

const Three = () => {

  useEffect(() => {
    const gui = new dat.GUI()

    const scene = new THREE.Scene()
    const cursor = {
      x: 0,
      y: 0
    }
    window.addEventListener('mousemove', (e) => {
      cursor.x = e.clientX / window.innerWidth - 0.5
      cursor.y = - (e.clientY / window.innerHeight - 0.5)
    })
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX / window.innerWidth * 2 - 1
      mouse.y = - (e.clientY / window.innerHeight) * 2 + 1
      // console.log(mouse.x)
    })
    window.addEventListener('click', () => {
      if (currentIntersect) {
        switch (currentIntersect.object) {
          case cube:
            console.log('cube')
            break
        }
      }
    })
    const mouse = new THREE.Vector2()
    const raycaster = new THREE.Raycaster()




    const loadingManager = new THREE.LoadingManager()
    loadingManager.onStart = () => { console.log('onStart') }
    loadingManager.onLoad = () => { console.log('onLoad') }
    loadingManager.onProgress = (e) => { console.log('onProgress') }
    loadingManager.onError = () => { console.log('onError') }
    // const textureLoader = new THREE.TextureLoader(loadingManager)
    // const colorTexture = textureLoader.load('/assets/images/three/textures/door/color.jpg')



    const texture = new THREE.TextureLoader(loadingManager).load(img);
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    // const geometry = new THREE.TorusBufferGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    // const material = new THREE.MeshNormalMaterial();
    const material = new THREE.MeshStandardMaterial()
    material.roughness = 0.7
    gui.add(material, 'metalness').min(0).max(1).step(0.001)
    gui.add(material, 'roughness').min(0).max(1).step(0.001)
    // const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true
    scene.add(cube);



    const plane = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(5, 5),
      material
    )
    plane.rotation.x = -Math.PI * 0.5
    plane.position.y = -0.5
    plane.receiveShadow = true
    scene.add(plane);



    //camera
    const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.z = 50;
    // camera.position.y = 20;
    // gsap.to(camera.position, { duration: 1, delay: 1, y: 100 })
    // gsap.to(camera.position, { duration: 1, delay: 2, y: 0 })
    // scene.add(camera)



    const canvas = document.getElementById("myThree")
    const renderer = new THREE.WebGL1Renderer({
      canvas,
      antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    // document.body.appendChild(renderer.domElement)

    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    // ambientLight.castShadow = true
    // scene.add(ambientLight)

    // const spotLight = new THREE.SpotLight(0xffffff, 1)
    // spotLight.castShadow = true
    // spotLight.position.set(0, 64, 0)
    // scene.add(spotLight)
    // const spotLightHelper = new THREE.SpotLightHelper(spotLight)
    // scene.add(spotLightHelper)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(2, 2, -1)
    gui.add(directionalLight, 'intensity').min(0).max(1).step(0.001)
    gui.add(directionalLight.position, 'x').min(-5).max(5).step(0.001)
    gui.add(directionalLight.position, 'y').min(-5).max(5).step(0.001)
    gui.add(directionalLight.position, 'z').min(-5).max(5).step(0.001)
    scene.add(directionalLight)

    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
    scene.add(directionalLightCameraHelper)




    // camera.lookAt(cube.position)

    // gsap.to(cube.position, { duration: 1, delay: 1, x: 50 })
    // gsap.to(cube.position, { duration: 1, delay: 2, x: 0 })


    const controls = new OrbitControls(camera, renderer.domElement)
    // const stats = Stats()
    // document.body.appendChild(stats.dom)


    // const axesHelper = new THREE.AxesHelper()
    // scene.add(axesHelper)

    let currentIntersect = null


    const animate = () => {
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;

      controls.update()
      // stats.update()

      // camera.position.x = cursor.x * 50
      // camera.position.y = cursor.y * 50


      // camera.lookAt(cube.position)
      // camera.lookAt(new THREE.Vector3(0,0,0))


      // const rayOrigin = new THREE.Vector3(-3,0,0)
      // const rayDirection = new THREE.Vector3(1,0,0)
      // rayDirection.normalize()
      // raycaster.set(rayOrigin,rayDirection)
      raycaster.setFromCamera(mouse, camera)

      const objectToTest = [cube]
      const intersects = raycaster.intersectObjects(objectToTest)

      for (const object of objectToTest) {
        object.material.color.set('#ff0000')
      }
      for (const intersect of intersects) {
        intersect.object.material.color.set('#0000ff')
      }
      if (intersects.length) {
        if (currentIntersect === null) {

        }
        currentIntersect = intersects[0]
      } else {
        if (currentIntersect) {

          currentIntersect = null
        }
      }


      renderer.render(scene, camera)
      window.requestAnimationFrame(animate)
    }
    animate()

  }, [])

  return (
    <>
      <Canvashidden>
        <canvas id="myThree" />
        {/* <Publiclayout>
      </Publiclayout> */}
      </Canvashidden>
    </>
  )
}

export default Three