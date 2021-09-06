import { MeshStandardMaterial, TextureLoader, RepeatWrapping, DoubleSide } from "three"

const textureLoader = new TextureLoader()

const loadTexture = (text) => {
  // console.log(text)
  const texture = textureLoader.load(text, ( texture )=> {
      texture.repeat.set(1, 1)
      texture.wrapS = texture.wrapT = RepeatWrapping;
      texture.flipY = false;
      texture.needsUpdate = true;
    })

    // console.log(texture)
  return texture
}

const useTexture = (texture) => {
  let textureMap = loadTexture(texture)
  // let material  = new MeshStandardMaterial({map: textureMap, side: DoubleSide })

  // console.log(material.map)

  const materials = {
    fabric: new MeshStandardMaterial({ map: loadTexture(textureMap), side: DoubleSide }),
    threadMat :new MeshStandardMaterial({
      color:0xffff00,         
      // combine: THREE.MixOperation,
      // side: THREE.DoubleSide
  })
}
  
  return materials
}


export { loadTexture, useTexture }
