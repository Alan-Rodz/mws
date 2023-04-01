import { useLoader } from '@react-three/fiber';
import { FC } from 'react';
import { MeshStandardMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// ********************************************************************************
// == Const =======================================================================
export const PENGUIN_COLORS = ['blue', 'green', 'pink', 'yellow'];

const PENGUIN_BLUE_BODY_COLOR = '#1A67E7',
  PENGUIN_GREEN_BODY_COLOR = '#19A333',
  PENGUIN_PINK_BODY_COLOR = '#B942B3',
  PENGUIN_YELLOW_BODY_COLOR = '#D1B600';

const getPenguinBodyColor = (color: typeof PENGUIN_COLORS[number]) => {
  switch (color) {
    case 'blue': return PENGUIN_BLUE_BODY_COLOR;
    case 'green': return PENGUIN_GREEN_BODY_COLOR;
    case 'pink': return PENGUIN_PINK_BODY_COLOR;
    case 'yellow': return PENGUIN_YELLOW_BODY_COLOR;
  }
};

// == Type ========================================================================
type Props = {
  bodyColor: typeof PENGUIN_COLORS[number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
};

// == Component ===================================================================
export const Penguin: FC<Props> = ({ bodyColor, position, rotation, scale }) => {
  const penguin = useLoader(GLTFLoader, '/3d/penguin.glb');

  // @ts-ignore
  const bodyGeometry = penguin.nodes['Sphere_1'].geometry, beakGeometry = penguin.nodes['Sphere_2'].geometry, eyesGeometry = penguin.nodes['Sphere_3'].geometry, armsGeometry = penguin.nodes['Sphere_4'].geometry;

  // -- UI ------------------------------------------------------------------------
  if (position && rotation && scale) {
    return (
      <group position={position} rotation={rotation} scale={scale}>
        <mesh material={new MeshStandardMaterial({ color: getPenguinBodyColor(bodyColor) })} geometry={bodyGeometry} />
        <mesh material={new MeshStandardMaterial({ color: '#F2C94C' })} geometry={beakGeometry} />
        <mesh material={new MeshStandardMaterial({ color: '#000000' })} geometry={eyesGeometry} />
        <mesh material={new MeshStandardMaterial({ color: '#E78627' })} geometry={armsGeometry} />
      </group>
    );
  } else {
    return (<mesh><primitive object={penguin.scene} /></mesh>);
  }
};
