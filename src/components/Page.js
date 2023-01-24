import React from 'react';

import { useRef, useState } from 'react'

import { usePlane } from "@react-three/cannon";

import * as THREE from "three";
import { Box, Html } from '@react-three/drei';


import { useStore } from '../hooks/useStore';


export const Page = () => {
    function Box() {
        const [size, set] = useState(0.5)
        const [hidden, setVisible] = useState(false)
        
        
        return (
        
        <mesh scale={size * 2}>
            <boxGeometry />
            <meshStandardMaterial />
            <Html
            style={{
                transition: 'all 0.2s',
                opacity: hidden ? 0 : 1,
                transform: `scale(${hidden ? 0.5 : 1})`
            }}
            distanceFactor={1.5}
            position={[0, 0, 0.51]}
            transform
            occlude
            onOcclude={setVisible}>
                
            <span>Text</span>
            </Html>
        </mesh>
        
        )
    }
    

    return (
        <>

        <Box>
        </Box>
        
        </>
    )
}
