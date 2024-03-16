"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Environment, Gltf } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export const Experience = () => {
return (
    <>
        <Canvas>
            <OrbitControls />
            <Box>
            <meshNormalMaterial />
            </Box>
        </Canvas>
    </>
    );
};
