import React from 'react';

import { useRef, useState } from 'react'

import { usePlane } from "@react-three/cannon";

import * as THREE from "three";
import { Box, Html } from '@react-three/drei';


import { useStore } from '../hooks/useStore';


export const Page = () => {
    function Box() {
        const [size, set] = useState(0.5)
        
        let boxPosition = [0, 0, -5];
        
        return (
        
        <mesh 
        scale={size * 2}
        position={boxPosition}
        >
            
            <boxGeometry />
            <meshStandardMaterial />
            <Html
            position={[0,0, .51]}
            distanceFactor={1.5}
            transform
            occlude
            >
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
