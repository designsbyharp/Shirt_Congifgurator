import * as dat from "dat.gui"
import { data, materials } from "./modules/data";
import sceneCreation from "./modules/scene"
import createRenderer from "./modules/renderer"
import createCamera from "./modules/camera"
import createOrbitControls from "./modules/orbitControls"
import gameLoop from "./modules/gameloop"
import windowResize from "./modules/resize"
import initModel from "./modules/initModel.";
import createLights from "./modules/lighting"
import { loadTexture } from "./modules/loadTexture"

// import buttonCreation from "./modules/createButtons"




// /**
//  * Spector JS
//  */
// const SPECTOR = require('spectorjs')
// const spector = new SPECTOR.Spector()
// spector.displayUI()

// Init - call all functions to build the app
const init = () => {

  // buttonCreation(data.textureData, "textureData")
  // buttonCreation(data.categories, "categories")

  let collarCtas = document.querySelectorAll('.collar');
  let fitCtas = document.querySelectorAll('.fit');

  // collarCtas.forEach(button => {
  //   button.addEventListener('click', (e)=> {
  //     let categoryObj = data.categories.find(category => category.name === button.dataset.name);
  //     let targetID = button.dataset.id;
  //     console.log(button.dataset)
  //     loadModel(categoryObj.elements[targetID].url, scene, materials.fabric, false, categoryObj.name)
  //   })
  // })

  // fitCtas.forEach(button => {
  //   button.addEventListener('click', (e)=> {
  //     let categoryObj = data.categories.find(category => category.name === button.dataset.name);
  //     let targetID = button.dataset.id;
  //     console.log(button.dataset)
  //     loadModel(categoryObj.elements[targetID].url, scene, materials.fabric, false, categoryObj.name)
  //   })
  // })
  
  
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const canvas = document.querySelector("canvas.webgl")

  const scene = sceneCreation()
  const renderer = createRenderer(sizes, canvas)
  const camera = createCamera(sizes)

  const orbitControls = createOrbitControls(camera, canvas)
  gameLoop(orbitControls, renderer, scene, camera)

  windowResize(sizes, camera, renderer)

  // present default model when app is initialized 
  initModel(scene);

  // Call lights and add needed ones for the scene
  const lights = createLights();
  const {ambientLight, directionLight1, directionLight2, dLightHelper1, dLightHelper2} = lights;
  scene.add(ambientLight, directionLight1, directionLight2, dLightHelper1, dLightHelper2)

  // Change fabric
  // get buttons dom elements
  const buttonsFabric = document.querySelectorAll('.fabric-changer');

  buttonsFabric.forEach(el => {
    el.addEventListener('click', (e)=> {
      const targetID = e.target.id;
      // console.log(data.texturesData[targetID].url)
      materials.fabric.map = loadTexture(data.texturesData[targetID].url);
      materials.fabric.map.wrapS = materials.fabric.map.wrapT = RepeatWrapping
      materials.fabric.map.repeat.set(texturesData[id].scaleX, texturesData[id].scaleY)
      materials.needsUpdate = true
      // useTexture(targetTextureURL)
    })
  })


  // ctaFabrics.forEach((el) => {
  //   el.addEventListener("click", (e) => {
  //     let id = e.target.id
  //     materials.fabric.map = loadTexture(texturesData[id].url)
  //     materials.fabric.map.wrapS = materials.fabric.map.wrapT = RepeatWrapping
  //     materials.fabric.map.repeat.set(texturesData[id].scaleX, texturesData[id].scaleY)
  //     materials.needsUpdate = true
  //   })
  // })
// 
// 
//   function ctaEventsRemoveEls(ctas, category){
//     ctas.forEach((el) => {
//       el.addEventListener("click", (e) => {
//         let targetID = e.target.id;
//         console.log(shirtElements[category])
//         // console.log(shirtElements[category][targetID])
//         // console.log("deleted")
//         loadModel(shirtElements[category][targetID].url, scene, materials.fabric, false, category)
//       })
//     })
//   }
// //   


//   categories.forEach((model)=> {
//     ctaEventsRemoveEls(model.buttonInfo, model.category);
//   }) 
  

}

export default init

