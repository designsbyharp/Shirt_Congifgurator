function removeElement(target, category){
  // console.log(scene.userData.model)

  scene.userData.model.children.forEach(function(child){      
 
    if(child.userData.name === category && child.parent && category){
      console.log("working")
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

export default removeElement;