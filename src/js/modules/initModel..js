import loadModel from './loadModel';
// import { useTexture } from './loadTexture';
import { data, materials } from './data';
  
  const initModel = (scene) => {
    // get default texture & model from data.js
    // let defaultTextureURL = data.textureData[0].url;
    let defaultModelURL = data.modelData[0].url;

    // Load default model
    loadModel(defaultModelURL, scene, materials.fabric, true);
  }
 
  export default initModel;