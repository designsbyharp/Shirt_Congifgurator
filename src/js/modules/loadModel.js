import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
import { materials } from "./texturesData"
import { Group, RepeatWrapping } from "three"


let gltfLoader = new GLTFLoader()
let mesh;

const loadModel = (model, scene, material, modelDefault, category) => {
  gltfLoader.load(model, (gltf) => {

    // console.log(material) 

    mesh = gltf.scene
    mesh.userData.name = category
    // console.log(material)
    gltf.scene.traverse((child) => {

      child.material = material
      // material.map.wrapS = material.map.wrapT = RepeatWrapping

      // material.map.repeat.set(0.25, 0.25)
      let geometry = child.geometry;

      // if(geometry){

        // console.log(geometry.attributes)


      //   var uvAttribute = geometry.attributes.uv;
		
      //   if(uvAttribute){
      //      for ( var i = 0; i < uvAttribute.count; i ++ ) {
            
      //       var u = uvAttribute.getX( i );
      //       var v = uvAttribute.getY( i );
              
            // do something with uv
      //       if(modelDefault){
      //         u *= 0.25;
      //         v *= 0.25;
      //       } else {
      //         u *= 4;
      //         v *= 4;
      //       }
            
            // write values back to attribute
              
      //       uvAttribute.setXY( i, u, v );
      //   }
      //   }

      // }

      material.needsUpdate = true
    })
    
    
    if(modelDefault){
      // console.log(mesh)
      scene.userData.model = mesh;
      scene.add(mesh)
      // console.log(scene) 
    } else{
      removeElement(scene, category)

      console.log(mesh)
      scene.userData.model.add(mesh);
    }
  })
}

function removeElement(scene, category){
  console.log(scene.userData.model);

  scene.userData.model.children.forEach(function(child){   
    
    console.log(child.userData.name)
 
    if(child.userData.name === category && child.parent && category){
      // console.log("working")
      // console.log(child.parent)
      // console.log(child)
      
      // console.log(child)
      child.parent.remove(child)
      // child.visible = false;
      child.traverse(function(mesh){
        // console.log(mesh)
        if(mesh.geometry){
          mesh.geometry.dispose()
        }
      })
    }
  })
}


export default loadModel
