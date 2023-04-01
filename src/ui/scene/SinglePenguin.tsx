import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FC } from 'react';

import { Penguin } from './penguin/Penguin';

// ********************************************************************************
// == Component ===================================================================
const SinglePenguin: FC = () =>
  <Canvas style={{ height: '100%', width: '100%' }}>
    <Stage environment='night' intensity={0.6}>
      <Penguin bodyColor='blue' />
    </Stage>
    <OrbitControls autoRotate={false} />
  </Canvas>;

// == Export ======================================================================
export default SinglePenguin;
