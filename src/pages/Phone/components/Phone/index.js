import React, { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import gsap from "gsap";

export function PhoneModel({...prop}) {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/Phone/phone.gltf"
  );
  
  useEffect(() => {
    // gltf.scene.scale.set(0.005, 0.005, 0.005);
    gltf.scene.position.set(0, 2.5, 0);
    gltf.materials.Case.color.set(prop.color)
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
    
    // gltf.scene.children[0].position.set(0, 5, 0);
    // gltf.scene.children[1].position.set(0, 5, 0);
    // gltf.scene.children[2].position.set(0, 5, 0);
    // gltf.scene.children[3].position.set(0, 5, 0);
    // gltf.scene.children[4].position.set(0, -5, 0);

    // gsap.to(gltf.scene.children[4].rotation, { duration: 2, x: -2, stagger: 0.3 })
      // gsap.timeline({ repeat: -1 })
      // .to(gltf.scene.children[4].position, { duration: 2, y: -2, stagger: 0.3 })
      // .to(gltf.scene.children[4].position, { duration: 2, y: 0, stagger: 0.3 })

  }, [gltf,prop]);

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime();
  });

  return <primitive object={gltf.scene} />;
}
