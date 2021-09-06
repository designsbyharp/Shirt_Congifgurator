import { AmbientLight, DirectionalLight, DirectionalLightHelper, RepeatWrapping, TextureLoader } from "three"

const createLights =  () => {

const ambientLight = new AmbientLight(0xffffff, 0.3)
// scene.add(ambientLight)

const directionLight1 = new DirectionalLight(0xffffff, 2.6)
directionLight1.position.set(0, 4, 3)  
const directionLight2 = new DirectionalLight(0xffffff, 2.6)
directionLight2.position.set(0, 4, -3)
const dLightHelper1 = new DirectionalLightHelper(directionLight1);
const dLightHelper2 = new DirectionalLightHelper(directionLight2);

  return {
    ambientLight,
    directionLight1,
    directionLight2,
    dLightHelper1,
    dLightHelper2
  }

}

export default createLights;

// scene.add(dLightHelper1)
// scene.add(dLightHelper2)
// scene.add(directionLight1)
// scene.add(directionLight2)