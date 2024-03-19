import {Suspense,useEffect,useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";
import * as THREE from 'three';



const gradientVertexShader = `
  varying vec3 vNormal;

  void main() {
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const gradientFragmentShader = `
  varying vec3 vNormal;

  uniform vec3 colorTop;
  uniform vec3 colorMiddle;
  uniform vec3 colorBottom;

  void main() {
    vec3 normal = normalize(vNormal);    float intensity = dot(normal, normalize(vec3(0.5, 0.5, 1.0))); // Adjust the light direction as needed
    float gradient = abs(dot(normalize(vNormal), vec3(0.0, 1.0, 0.0)));
    vec3 finalColor;

    if (gradient < 0.25) {      finalColor = mix(colorTop * intensity, colorMiddle * intensity, gradient * 4.0);    } else {      finalColor = mix(colorMiddle * intensity, colorBottom * intensity, (gradient - 0.25) * 4.0);    }

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const gradientMaterial = new THREE.ShaderMaterial({
  vertexShader: gradientVertexShader,
  fragmentShader: gradientFragmentShader,
  uniforms: {
    colorTop: { value: new THREE.Color('#f8e05f') },
    colorMiddle: { value: new THREE.Color('#f8df5e') },
    colorBottom: { value: new THREE.Color('#d29520') },
  },
  lights: false
});


const Computers = ({ isMobile }) => {

  const computer = useGLTF('./test/spinner-about.glb');
  // const modelMaterial = computer.scene.children[0].material;
  // modelMaterial.color.set('#dbbe6f');

  computer.scene.traverse((node) => {
    if (node.isMesh) {
      node.material = gradientMaterial;
    }
  });

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
        intensity={0.3}
        castShadow
        shadow-mapSize={1024}/>

        <spotLight 
        position={[7, 10, 30]}
        angle={10.12}
        penumbra={1}
        intensity={0.3}
        castShadow
        shadow-mapSize={1024}/>

        <spotLight 
        position={[-9, 10, 30]}
        angle={10.12}
        penumbra={1}
        intensity={0.3}
        castShadow
        shadow-mapSize={1024}/>

        <spotLight 
        position={[-34, 10, 30]}
        angle={10.12}
        penumbra={1}
        intensity={0.3}
        castShadow
        shadow-mapSize={1024}/> 


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
        scale={isMobile ? 0.50 : 1}
        position={isMobile ? [0, 0.8, 0] : [0, -8, 0]}
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
          autoRotate
          autoRotateSpeed={10}
          enableZoom={true}
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