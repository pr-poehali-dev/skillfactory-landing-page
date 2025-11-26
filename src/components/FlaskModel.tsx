import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

function Flask() {
  const groupRef = useRef<any>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial 
          color="#4ade80" 
          transparent 
          opacity={0.6}
          roughness={0.1}
          metalness={0.3}
        />
      </mesh>
      
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.4, 0.6, 1, 32]} />
        <meshStandardMaterial 
          color="#93c5fd" 
          transparent 
          opacity={0.4}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>
      
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.8, 32]} />
        <meshStandardMaterial 
          color="#bfdbfe" 
          transparent 
          opacity={0.3}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>

      <mesh position={[0.7, 0.8, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.15, 0.2, 1, 32]} />
        <meshStandardMaterial 
          color="#fca5a5" 
          transparent 
          opacity={0.5}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
}

export default function FlaskModel() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={null}>
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 1, 5]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Flask />
          <OrbitControls 
            enableZoom={false} 
            autoRotate={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}