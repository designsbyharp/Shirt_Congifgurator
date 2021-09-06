import { DoubleSide, MeshStandardMaterial } from "three"
import { loadTexture } from "./loadTexture"

const texturesData = [
  {
    id: 0,
    url: "/Textures/floral-1.jpg",
    scaleX: 2,
    scaleY: 2
  },
  {
    id: 1,
    url: "/Textures/multiRedCheck.jpg",
    scaleX: 3,
    scaleY: 3
  },
  {
    id: 2,
    url: "/Textures/navyWhiteRed.jpg",
    scaleX: 3,
    scaleY: 3
  },
  {
    id: 3,
    url: "/Textures/redBlueCheck.jpg",
    scaleX: 2,
    scaleY: 3
  },
  {
    id: 4,
    url: "/Textures/whiteCheck.jpg",
    scaleX: 2,
    scaleY: 3
  },
  {
    id: 5,
    url: "/Textures/yelowCheck.jpg", 
    scaleX: 2,
    scaleY: 3
  }
] 

// var groupAo = that.textureLoader.load( aoUrl, texture => {
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//   texture.flipY = false;
//   // console.error( 'groupAo aoUrl', aoUrl );
//   that.renderscene();
// }); 
const materials = {
  fabric: new MeshStandardMaterial({ map: loadTexture(texturesData[0].url), side: DoubleSide }),
  threadMat :new MeshStandardMaterial({
    color:0xffff00,         
    // combine: THREE.MixOperation,
    // side: THREE.DoubleSide
}),   
buttonMat:new MeshStandardMaterial({
      color:0xdbdbdb,         
      // combine: THREE.MixOperation,
      // side: THREE.DoubleSide
}),  
}



export { texturesData, materials }
