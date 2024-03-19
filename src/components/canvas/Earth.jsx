import { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Line } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Object3D, Vector3 } from 'three';

const Human = ({ targetX, targetY, targetZ, position, angle, rotation }) => {
  const { scene } = useGLTF('./planet/scene.gltf');
  const spotlightTargetRef = useRef(new Object3D());

  useEffect(() => {
    spotlightTargetRef.current.position.set(targetX, targetY, targetZ);
    scene.add(spotlightTargetRef.current);
  }, [scene, targetX, targetY, targetZ]);

  const { viewport } = useThree();
  const viewportWidth = viewport.width;
  const viewportHeight = viewport.height;

  return (
    <>
      <mesh>
        <hemisphereLight intensity={0.05} groundColor="black"/>
        <pointLight intensity={0.2} />
        <spotLight 
          position={[-20, 40, 10]}
          angle={0.2}
          penumbra={1}
          intensity={0.4}
          castShadow
          shadow-mapSize={1024}
        />
        <spotLight 
          color="red"
          position={position}
          angle={Math.PI / angle} 
          intensity={1} 
          castShadow
          target={spotlightTargetRef.current}
        />
        <primitive 
          object={scene}
          scale={1.2}
          position-y={-2.9}
          rotation-y={rotation}
        />
      </mesh>
      {/* Visualization line */}
      {/* <Line points={[new Vector3(...position), new Vector3(targetX, targetY, targetZ)]} color="white" /> */}
    </>
  );
};

const HumanCanvas = ({ targetX, targetY, targetZ, position, angle, rotation }) => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
        <Human targetX={targetX} targetY={targetY} targetZ={targetZ} position={position} angle={angle} rotation={rotation} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default HumanCanvas;
