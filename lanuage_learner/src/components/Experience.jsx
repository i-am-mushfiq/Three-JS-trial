"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

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
