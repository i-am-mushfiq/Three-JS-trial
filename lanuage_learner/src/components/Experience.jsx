"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Environment, Gltf} from '@react-three/drei';
import { Teacher } from './Teachers';
import { degToRad } from 'three/src/math/mathutils';

export const Experience = () => {
    return (
        <>
            <Canvas style={{ background: 'black' }}>
                <OrbitControls />
                <Environment preset='sunset' />
                <ambientLight intensity={0.85} color="pink" />
                <Teacher 
                    teacher={"female"}
                    position = {[11, -1.7, 11.5]}
                    scale = {6}
                    rotation-y = {degToRad(210)} />
                <Gltf 
                    src='\models\classroom.glb'
                    position={[0.2,-1.7, -2]}/>
            </Canvas>
        </>
    );
};
