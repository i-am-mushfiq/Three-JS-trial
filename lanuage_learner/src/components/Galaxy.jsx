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
                    focusDistance={0} // where to focus
                    focalLength={2} // focal length
                    bokehScale={5} // bokeh size
                />
                <Bloom
                    intensity={5.0} // The bloom intensity.
                    blurPass={undefined} // A blur pass.
                    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
                    luminanceSmoothing={1} // smoothness of the luminance threshold. Range is [0, 1]
                    mipmapBlur={true} // Enables or disables mipmap blur. // The vertical resolution.
                />
            </EffectComposer>
            <GalaxyRotation gltfRef={gltfRef} />
        </Canvas>
    );
};

const GalaxyRotation = ({ gltfRef }) => {
    useFrame(({ clock }) => {
        if (gltfRef.current) {
            const elapsedTime = clock.getElapsedTime(); // Get elapsed time in seconds
            const rotationSpeed = (2 * Math.PI * 30) / 60; // Convert rpm to radians per second (2π radians = 1 revolution)
            gltfRef.current.rotation.y = elapsedTime * rotationSpeed; // Rotate the model
        }
    });

    return null;
};
