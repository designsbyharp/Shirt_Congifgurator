import { WebGLRenderer, sRGBEncoding, ACESFilmicToneMapping } from "three";

const createRenderer = (sizes, canvas) => {
  const renderer = new WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputEncoding = sRGBEncoding;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.setClearColor(0xff0000, 0.0);
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export default createRenderer;

