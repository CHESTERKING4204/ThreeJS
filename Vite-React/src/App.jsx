import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

const RotatingCylinder = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 2]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <OrbitControls enablePan enableZoom enableRotate />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <color attach="background" args={['black']} />

      {/* Sparkles far from the center */}
      <group>
        <Sparkles count={100} scale={[10, 10, 10]} position={[10, 0, 0]} size={6} noise={1} speed={0} color="white" />
        <Sparkles count={100} scale={[10, 10, 10]} position={[-10, 0, 0]} size={6} noise={1} speed={0} color="white" />
        <Sparkles count={100} scale={[10, 10, 10]} position={[0, 10, 0]} size={6} noise={1} speed={0} color="white" />
        <Sparkles count={100} scale={[10, 10, 10]} position={[0, -10, 0]} size={6} noise={1} speed={0} color="white" />
        <Sparkles count={100} scale={[10, 10, 10]} position={[0, 0, 10]} size={6} noise={1} speed={0} color="white" />
        <Sparkles count={100} scale={[10, 10, 10]} position={[0, 0, -10]} size={6} noise={1} speed={0} color="white" />
      </group>

      <RotatingCylinder />
    </Canvas>
  );
};

export default App;
