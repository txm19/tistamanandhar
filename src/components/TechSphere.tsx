import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { 
  Code, Database, Globe, Cpu, Server, Container, 
  BarChart3, GitBranch, Github, Cloud, FileCode, 
  BookOpen, Settings, Layers, Brain, Zap
} from 'lucide-react';

interface TechIcon {
  name: string;
  color: string;
  position: [number, number, number];
  icon: React.ComponentType<any>;
}

const TechIconMesh: React.FC<{ icon: TechIcon }> = ({ icon }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.lookAt(state.camera.position);
    }
  });

  const IconComponent = icon.icon;

  return (
    <mesh ref={meshRef} position={icon.position}>
      <Html
        transform
        occlude
        position={[0, 0, 0]}
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-lg shadow-lg transform-gpu"
             style={{ backgroundColor: icon.color }}>
          <IconComponent 
            size={24} 
            color="white" 
            strokeWidth={2}
          />
        </div>
      </Html>
    </mesh>
  );
};

const RotatingSphere: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.002;
    }
  });

  const techIcons: TechIcon[] = useMemo(() => {
    const skills = [
      { name: 'Python', color: '#3776ab', icon: Code },
      { name: 'Java', color: '#f89820', icon: Cpu },
      { name: 'JavaScript', color: '#f7df1e', icon: FileCode },
      { name: 'C++', color: '#00599c', icon: Zap },
      { name: 'React', color: '#61dafb', icon: Layers },
      { name: 'Node.js', color: '#339933', icon: Server },
      { name: 'HTML', color: '#e34f26', icon: Globe },
      { name: 'CSS', color: '#1572b6', icon: Settings },
      { name: 'Flask', color: '#000000', icon: Server },
      { name: 'MySQL', color: '#4479a1', icon: Database },
      { name: 'MongoDB', color: '#47a248', icon: Database },
      { name: 'Docker', color: '#2496ed', icon: Container },
      { name: 'pandas', color: '#150458', icon: BarChart3 },
      { name: 'NumPy', color: '#013243', icon: Brain },
      { name: 'Git', color: '#f05032', icon: GitBranch },
      { name: 'GitHub', color: '#181717', icon: Github },
      { name: 'Jenkins', color: '#d33833', icon: Settings },
      { name: 'GCP', color: '#4285f4', icon: Cloud },
      { name: 'VS Code', color: '#007acc', icon: FileCode },
      { name: 'Jupyter', color: '#f37626', icon: BookOpen },
    ];

    const radius = 4;
    const icons: TechIcon[] = [];
    
    skills.forEach((skill, index) => {
      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      icons.push({
        name: skill.name,
        color: skill.color,
        position: [x, y, z],
        icon: skill.icon,
      });
    });
    
    return icons;
  }, []);

  return (
    <group ref={groupRef}>
      {techIcons.map((icon, index) => (
        <TechIconMesh key={index} icon={icon} />
      ))}
    </group>
  );
};

const TechSphere: React.FC = () => {
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Technology Universe</h3>
          <p className="text-lg text-muted-foreground">
            Interactive 3D visualization of my technical skills
          </p>
        </div>
        
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          style={{ height: '400px' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <RotatingSphere />
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            maxDistance={20}
            minDistance={5}
            autoRotate={false}
          />
        </Canvas>
        
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Click and drag to explore • Scroll to zoom</p>
        </div>
      </div>
    </div>
  );
};

export default TechSphere;
