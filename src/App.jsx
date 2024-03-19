import { BrowserRouter } from "react-router-dom";
import { EarthCanvas } from './components';
import { useState } from "react";

const App = () => {

  const titles = ["Testa", "Spalla", "Braccio"];
  const descriptions = [
    "Description for Title 1. Lorem ipsum dolor sit amet.",
    "Description for Title 2. Consectetur adipiscing elit.",
    "Description for Title 3. Sed do eiusmod tempor incididunt."
  ];
  const rotations = [ -0.2, -0.4, -0.6 ];
  const positions = [[-0.06, 4, 2.9], [-3.8, 0.5, 2.5], [-1.1, 0.5, 2.5]]
  const angles = [ 30, 50, 40 ];
  const targetsX = [ 0.25, -1.15, -0.1];
  const targetsY = [ 5, 3.35, 3.05];
  const targetsZ = [ 1.3, 1.2, 1.2];


  const [targetX, setTargetX] = useState(targetsX[2]);
  const [targetY, setTargetY] = useState(targetsY[2]);
  const [targetZ, setTargetZ] = useState(targetsZ[2]);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [position, setPosition] = useState(positions[2]);
  const [angle, setAngle] = useState(angles[2]);
  const [rotation, setRotation] = useState(rotations[2]);
  const [title, setTitle] = useState(titles[2]);
  const [description, setDescription] = useState(descriptions[2]);



  const rotateNext = () => {
    const nextIndex = (currentIndex + 1) % titles.length; // Cycle through indices forward
    setCurrentIndex(nextIndex);
    setTitle(titles[nextIndex]);
    setDescription(descriptions[nextIndex]);
    setRotation(rotations[nextIndex]);
    setPosition(positions[nextIndex])
    setAngle(angles[nextIndex]);
    setTargetX(targetsX[nextIndex]);
    setTargetY(targetsY[nextIndex]);
    setTargetZ(targetsZ[nextIndex]);
  };
  
  const rotatePrevious = () => {
    const previousIndex = (currentIndex - 1 + titles.length) % titles.length; // Cycle through indices backward
    setCurrentIndex(previousIndex);
    setTitle(titles[previousIndex]);
    setDescription(descriptions[previousIndex]);
    setRotation(rotations[previousIndex]);
    setPosition(positions[previousIndex])
    setAngle(angles[previousIndex]);
    setTargetX(targetsX[previousIndex]);
    setTargetY(targetsY[previousIndex]);
    setTargetZ(targetsZ[previousIndex]);
  };
  

  return (
    <BrowserRouter>
      <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        <div style={{ flex: 1 }}>
          <EarthCanvas targetX={targetX} targetY={targetY} targetZ={targetZ} position={position} angle={angle} rotation={rotation}/>
        </div>
        <div 
        className="px-40"
        style={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'start', 
            color: 'white'
          }}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="flex justify-between w-1/2">
            <button onClick={rotatePrevious} className="my-5">Previous</button>
            <button onClick={rotateNext} className="my-5">Next</button>
          </div>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
