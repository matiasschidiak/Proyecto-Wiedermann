const loader = new THREE.GLTFLoader();
loader.load('modelos/auto.glb', function(gltf) {
  const car = gltf.scene;
  car.scale.set(1.5, 1.5, 1.5);
  scene.add(car);
});
