import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Import tech logos
import pythonLogo from '../assets/logos/python.svg';
import javaLogo from '../assets/logos/java.svg';
import javascriptLogo from '../assets/logos/javascript.svg';
import typescriptLogo from '../assets/logos/typescript.svg';
import cppLogo from '../assets/logos/cpp.svg';
import sqlLogo from '../assets/logos/sql.svg';
import reactLogo from '../assets/logos/react.svg';
import nodejsLogo from '../assets/logos/nodejs.svg';
import flaskLogo from '../assets/logos/flask.svg';
import fastapiLogo from '../assets/logos/fastapi.svg';
import expressLogo from '../assets/logos/express.svg';
import materialuiLogo from '../assets/logos/materialui.svg';
import html5Logo from '../assets/logos/html5.svg';
import css3Logo from '../assets/logos/css3.svg';
import tailwindLogo from '../assets/logos/tailwind.svg';
import gitLogo from '../assets/logos/git.svg';
import dockerLogo from '../assets/logos/docker.svg';
import jenkinsLogo from '../assets/logos/jenkins.svg';
import gcpLogo from '../assets/logos/gcp.svg';
import awsLogo from '../assets/logos/aws.svg';
import mongodbLogo from '../assets/logos/mongodb.svg';
import pandasLogo from '../assets/logos/pandas.svg';
import numpyLogo from '../assets/logos/numpy.svg';
import matplotlibLogo from '../assets/logos/matplotlib.svg';
import seabornLogo from '../assets/logos/seaborn.svg';
import sklearnLogo from '../assets/logos/sklearn.svg';
import restApiLogo from '../assets/logos/rest-api.png';
import graphqlLogo from '../assets/logos/graphql.svg';

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
      // Programming Languages
      { name: 'Python', logo: pythonLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'C/C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'SQL', logo: sqlLogo },
      
      // Frameworks & Libraries
      { name: 'React', logo: reactLogo },
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Flask', logo: flaskLogo },
      { name: 'FastAPI', logo: fastapiLogo },
      { name: 'Express', logo: expressLogo },
      { name: 'Material-UI', logo: materialuiLogo },
      
      // Tools & Platforms
      { name: 'Git', logo: gitLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'Jenkins', logo: jenkinsLogo },
      { name: 'GCP', logo: gcpLogo },
      { name: 'AWS', logo: awsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
      // Data Analysis
      { name: 'pandas', logo: pandasLogo },
      { name: 'NumPy', logo: numpyLogo },
      { name: 'Matplotlib', logo: matplotlibLogo },
      { name: 'Seaborn', logo: seabornLogo },
      { name: 'scikit-learn', logo: sklearnLogo },
      
      // Web Development
      { name: 'HTML', logo: html5Logo },
      { name: 'CSS', logo: css3Logo },
      { name: 'Tailwind CSS', logo: tailwindLogo },
      { name: 'REST APIs', logo: restApiLogo },
      { name: 'GraphQL', logo: graphqlLogo },
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
