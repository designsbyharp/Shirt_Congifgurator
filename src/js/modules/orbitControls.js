import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Controls
const createOrbitControls = (camera, canvas) => {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  return controls;
}

export default createOrbitControls;
