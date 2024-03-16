"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Environment, Gltf} from '@react-three/drei';

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
                <ambientLight intensity={0.85} color="pink" />
                <Gltf src='\models\exported_untitled.glb'/>
                <Gltf src='\models\keyboard.glb'/>
                {/*<Ply src='/models/need_some_space.glb'/>*/}
                
            </Canvas>
        </>
    );
};
