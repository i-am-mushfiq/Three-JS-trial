"use client";
import "./style.css";
import { Canvas } from '@react-three/fiber';
import { Html, Box, Environment, Gltf, PresentationControls} from '@react-three/drei';
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export const Setup = () => {
    return (
        <>
            <Canvas style={{ background: 'black' }}>
                <PresentationControls 
                    enabled={true}
                    global={false}
                    cursor={false}
                    snap={false} 
                    speed={1} 
                    zoom={1} 
                    rotation={[0, - Math.PI/2 , 0]} 
                    polar={[-.3, 0.07]} 
                    azimuth={[- Math.PI / 4 + 0.45, Math.PI / 4 - 0.4]}
                    config={{ mass: 1, tension: 170, friction: 26 }}
                >
                <EffectComposer>
                    <Bloom
                            intensity={.5} 
                            blurPass={undefined} 
                            luminanceThreshold={0.5} 
                            luminanceSmoothing={0.5}
                    />
                </EffectComposer>
                <Html wrapperClass='laptop' 
                    position={[-2, 0.98 , 0.725]}
                    transform
                    distanceFactor={-1.62}
                    rotation={[- Math.PI ,  Math.PI/2, 0]} >
                    <iframe src='https://www.youtube.com/embed/hlK5d4-ykBw' />
                </Html>
                <Html wrapperClass='setup' 
                    position={[2, 0.98 , 0.725]}
                    transform
                    distanceFactor={-1.62}
                    rotation={[- Math.PI ,  Math.PI/2, 0]} >
                    <iframe src='https://www.youtube.com/embed/hlK5d4-ykBw' />
                </Html>
                <Environment preset='warehouse' />
                <ambientLight intensity={1} color="#FF7373" />
                <Gltf scale={[1,1,1]} position={[1,-2,-2]}  src='\models\setup.glb' />
                </PresentationControls>
            </Canvas>
        </>
    );
};
