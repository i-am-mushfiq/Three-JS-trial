"use client";
import "./style.css";
import { Canvas } from '@react-three/fiber';
import { Html, Box, Environment, Gltf, PresentationControls} from '@react-three/drei';
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export const Computer = () => {
    return (
        <>
            <Canvas style={{ background: '#FF7373' }}>
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
                            intensity={.5} // The bloom intensity.
                            blurPass={undefined} // A blur pass.
                            luminanceThreshold={0.5} // luminance threshold. Raise this value to mask out darker elements in the scene.
                            luminanceSmoothing={0.5}
                    />
                </EffectComposer>
                <Html wrapperClass='laptop' 
                    position={[1.45, .93 , 0]}
                    transform
                    distanceFactor={-1.05}
                    rotation={[- Math.PI,  Math.PI/2, 0]} >
                    <iframe src='https://www.youtube.com/embed/hlK5d4-ykBw' />
                </Html>
                <Environment preset='warehouse' />
                <ambientLight intensity={1} color="#FF7373" />
                <Gltf scale={[8,8,8]} position={[0,-.25 * 8,0]}  src='\models\computer.glb' />
                </PresentationControls>
            </Canvas>
        </>
    );
};
