import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface TechNodeProps {
  position: [number, number, number];
  text: string;
  color: string;
}

const TechNode = ({ position, text, color }: TechNodeProps) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate the entire sphere slowly
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      <Text
        position={position}
        fontSize={0.4}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {text}
      </Text>
    </group>
  );
};

const TechSphere = () => {
  const techStack = [
    { name: 'React', color: '#61DAFB' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Java', color: '#ED8B00' },
    { name: 'Node.js', color: '#68A063' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Git', color: '#F05032' },
    { name: 'Flask', color: '#000000' },
    { name: 'Express', color: '#000000' },
    { name: 'Tailwind', color: '#06B6D4' },
    { name: 'Three.js', color: '#000000' },
    { name: 'C++', color: '#00599C' },
    { name: 'HTML', color: '#E34F26' },
    { name: 'CSS', color: '#1572B6' },
    { name: 'GraphQL', color: '#E10098' },
    { name: 'SQL', color: '#4479A1' },
  ];

  const spherePositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    const radius = 8;
    
    techStack.forEach((_, index) => {
      // Distribute points on sphere using golden spiral
      const y = 1 - (index / (techStack.length - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = (index * 137.508 * Math.PI) / 180; // Golden angle

      const x = Math.cos(theta) * radiusAtY * radius;
      const z = Math.sin(theta) * radiusAtY * radius;

      positions.push([x, y * radius, z]);
    });

    return positions;
  }, [techStack.length]);

  return (
    <div className="w-full h-[600px] relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {techStack.map((tech, index) => (
          <TechNode
            key={tech.name}
            position={spherePositions[index]}
            text={tech.name}
            color={tech.color}
          />
        ))}
      </Canvas>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">Tech Stack Universe</h3>
          <p className="text-muted-foreground">Interactive 3D visualization of my technical skills</p>
        </div>
      </div>
    </div>
  );
};

export default TechSphere;