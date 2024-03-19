"use client"
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Gltf } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing';
import { useRef } from 'react';

export const Galaxy = () => {
    const gltfRef = useRef();

    return (
        <Canvas style={{ background: 'black' }}>
            <Gltf ref={gltfRef} src='/models/galaxy.glb' position={[-1.3, -1.3, 4]} animations />
            <Environment preset='sunset' />
            <EffectComposer>
                <DepthOfField
                    focusDistance={0} 
                    focalLength={2} 
                    bokehScale={5}
                />
                <Bloom
                    intensity={5.0} 
                    blurPass={undefined} 
                    luminanceThreshold={0} 
                    luminanceSmoothing={1} 
                    mipmapBlur={true}
                />
            </EffectComposer>
            <GalaxyRotation gltfRef={gltfRef} />
        </Canvas>
    );
};

const GalaxyRotation = ({ gltfRef }) => {
    useFrame(({ clock }) => {
        if (gltfRef.current) {
            const elapsedTime = clock.getElapsedTime(); 
            const rotationSpeed = (2 * Math.PI * 30) / 60; 
            gltfRef.current.rotation.y = elapsedTime * rotationSpeed; 
        }
    });

    return null;
};
