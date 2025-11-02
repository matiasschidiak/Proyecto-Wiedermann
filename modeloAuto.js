// Obtener contenedor
const container = document.getElementById("auto-3d-container");

// Crear escena y cámara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 2, 6); // cámara más arriba y alejada

// Crear renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
container.appendChild(renderer.domElement);

// Luces
const ambient = new THREE.AmbientLight(0xffffff, 1.2);
const light1 = new THREE.DirectionalLight(0xffffff, 1);
const light2 = new THREE.PointLight(0xffffff, 0.8, 50);
light1.position.set(10, 10, 10);
light2.position.set(-5, 3, -5);
scene.add(ambient, light1, light2);

// Piso opcional
const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, metalness: 0.9, roughness: 0.2 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -0.8;
scene.add(floor);

// Cargar modelo 3D
const loader = new THREE.GLTFLoader();
loader.load("modeloAuto/bugatti.glb", function(gltf) {
  const car = gltf.scene;
  car.scale.set(0.8, 0.8, 0.8);
  car.position.set(0, 0, 0);
  scene.add(car);

  // Controles del mouse
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;

  // Animación del auto
  function animate() {
    requestAnimationFrame(animate);
    car.rotation.y += 0.005; // gira lentamente
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
});


// Ajustar tamaño al cambiar ventana
window.addEventListener("resize", () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});
