import {Suspense,useEffect,useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {

  const computer = useGLTF('./test/human.glb');
  // const computer = useGLTF('./logo/logo.gltf');


  return (
    <mesh>
      <meshStandardMaterial color="gold" />
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1} />
      {/* front light */}
        <spotLight 
        position={[25, 10, 30]}
        angle={10.12}
        penumbra={1}
        intensity={0.2}
        castShadow
        shadow-mapSize={1024}
        color="#dbbe6f"/>

        <spotLight 
        position={[7, 10, 30]}
        angle={10.12}
        penumbra={1}
        intensity={0.2}
        castShadow
        shadow-mapSize={1024}
        color="#dbbe6f"/>

        <spotLight 
        position={[-9, 10, 30]}
        angle={10.12}
        penumbra={1}
        intensity={0.2}
        castShadow
        shadow-mapSize={1024}
        color="#dbbe6f"/>

        <spotLight 
        position={[-34, 10, 30]}
        angle={10.12}
        penumbra={1}
        intensity={0.2}
        castShadow
        shadow-mapSize={1024}
        color="#dbbe6f"/>


        {/* back light */}

        <spotLight 
        position={[25, 10, -30]}
        angle={10.12}
        penumbra={1}
        intensity={0.3}
        castShadow
        shadow-mapSize={1024}/>

        <spotLight 
        position={[-7, 10, -30]}
        angle={10.12}
        penumbra={1}
        intensity={0.3}
        castShadow
        shadow-mapSize={1024}/>

        <spotLight 
        position={[-9, 10, -30]}
        angle={10.12}
        penumbra={1}
        intensity={0.3}
        castShadow
        shadow-mapSize={1024}/>

        <spotLight 
        position={[-34, 10, -30]}
        angle={10.12}
        penumbra={1}
        intensity={0.3}
        castShadow
        shadow-mapSize={1024}/>

      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.50 : 0.55}
        position={isMobile ? [0, 0.8, 0] : [0, -9, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}
const ComputersCanvas = () => {

  const [ isMobile, setIsMobile ] = useState(false);

  useEffect(()=> {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',
    handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',
      handleMediaQueryChange);
    }

  }, [])

  return(
    <Canvas
    className=""
      frameLoop="demand"
      shadows
      camera={{
        position:[ 20, 3, 5 ],
        fov: 25
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          // autoRotate
          // autoRotateSpeed={10}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas