import { useBox } from "@react-three/cannon"
import { useState } from "react"
import { useStore } from "../hooks/useStore"


export const Cube = ({ position, texture }) => {
	const [isHovered, setIsHovered] = useState(false);

	const [ref] = useBox(() => ({
		type: 'Static',
		position
	}));

	const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube]);

	const activeTexture = textures[texture + 'Texture'];

	return (
		<mesh
			onPointerMove={(e) => {
				e.stopPropagation()
				setIsHovered(true)
			}}

			onPointerOut={(e) => {
				e.stopPropagation()
				setIsHovered(false)
			}}

			onPointerDown = {(e) => {
				e.stopPropagation();
				
				const { x, y, z } = ref.current.position;
				
				const clickedFace = Math.floor(e.faceIndex / 2);				
				
				if (e.button === 0) {
					removeCube(x, y, z)
				};
				
				if ((clickedFace === 0) && (e.button === 2)) {
					addCube(x + 1, y, z)
				};
				
				if ((clickedFace === 1) && (e.button === 2)) {
					addCube(x - 1, y, z)
				};
				
				if ((clickedFace === 2) && (e.button === 2)) {
					addCube(x, y + 1, z)
				};

				if ((clickedFace === 3) && (e.button === 2)) {
					addCube(x, y - 1, z)
				};
				
				if ((clickedFace === 4) && (e.button === 2)) {
					addCube(x, y, z + 1)
				};
				
				if ((clickedFace === 5) && (e.button === 2)) {
					addCube(x, y, z - 1)
				}
			}
		}

			ref={ref}
		>
			<boxBufferGeometry attach="geometry" />
			<meshStandardMaterial
				color={isHovered ? 'grey' : 'white'}
				map={activeTexture}
				transparent={true}
				opacity={texture === 'glass' ? 0.6 : 1}
				attach="material" />
		</mesh>
	)
}