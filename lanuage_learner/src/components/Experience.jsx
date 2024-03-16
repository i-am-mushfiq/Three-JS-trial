"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Environment, Gltf } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export const Experience = () => {
return (
    <>
        <Canvas style={{ background: 'black' }}>
            <OrbitControls />
            {/*
            <Box>
            <meshNormalMaterial />
            </Box>
            */}
            <Environment preset='sunset' />
            {/*<ambientLight intensity={0.5} color="pink" /> {/* Ambient light 
            <directionalLight intensity={0.5} position={[0, 10, 0]} color="pink" />*/}
            <Gltf src='/models/need_some_space.glb'/>
        </Canvas>
    </>
    );
};
