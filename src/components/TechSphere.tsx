import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Import tech logos
import pythonLogo from '../assets/logos/python.svg';
import javaLogo from '../assets/logos/java.svg';
import javascriptLogo from '../assets/logos/javascript.svg';
import cppLogo from '../assets/logos/cpp.svg';
import reactLogo from '../assets/logos/react.svg';
import nodejsLogo from '../assets/logos/nodejs.svg';
import html5Logo from '../assets/logos/html5.svg';
import css3Logo from '../assets/logos/css3.svg';
import flaskLogo from '../assets/logos/flask.svg';
import mysqlLogo from '../assets/logos/mysql.svg';
import mongodbLogo from '../assets/logos/mongodb.svg';
import dockerLogo from '../assets/logos/docker.svg';
import pandasLogo from '../assets/logos/pandas.svg';
import numpyLogo from '../assets/logos/numpy.svg';
import gitLogo from '../assets/logos/git.svg';
import githubLogo from '../assets/logos/github.svg';
import jenkinsLogo from '../assets/logos/jenkins.svg';
import gcpLogo from '../assets/logos/gcp.svg';
import vscodeLogo from '../assets/logos/vscode.svg';
import jupyterLogo from '../assets/logos/jupyter.svg';

interface TechIcon {
  name: string;
  logo: string;
  position: [number, number, number];
}

const TechIconMesh: React.FC<{ icon: TechIcon }> = ({ icon }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.lookAt(state.camera.position);
    }
  });

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
        <img 
          src={icon.logo} 
          alt={icon.name}
          className="w-16 h-16 drop-shadow-lg transform-gpu"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
          }}
        />
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
      { name: 'Python', logo: pythonLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'React', logo: reactLogo },
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'HTML5', logo: html5Logo },
      { name: 'CSS3', logo: css3Logo },
      { name: 'Flask', logo: flaskLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'pandas', logo: pandasLogo },
      { name: 'NumPy', logo: numpyLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Jenkins', logo: jenkinsLogo },
      { name: 'GCP', logo: gcpLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Jupyter', logo: jupyterLogo },
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
        logo: skill.logo,
        position: [x, y, z],
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
    <div className="w-full h-[800px] bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Technology Universe</h3>
          <p className="text-lg text-muted-foreground">
            Interactive 3D visualization of my technical skills
          </p>
        </div>
        
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          style={{ height: '600px' }}
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
