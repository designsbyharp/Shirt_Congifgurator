
// Game Loop
const gameLoop = (controls, renderer, scene, camera) => {
  const tick = () => {

    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };
  tick();
}

export default gameLoop;

