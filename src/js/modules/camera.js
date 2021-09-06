import { PerspectiveCamera } from "three";

// Create base camera
const createCamera = (sizes) =>
{
  const camera = new PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 9.5;

  return camera;
}

export default createCamera;




