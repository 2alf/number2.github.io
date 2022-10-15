import './style.css';
import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// pyro

const geometry = new THREE.TetrahedronGeometry(2,1);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff,wireframe:true });
const pyro = new THREE.Mesh(geometry, material);

scene.add(pyro);

const geometry2 = new THREE.TorusKnotGeometry(20,3);
const material2 = new THREE.MeshStandardMaterial({ color: 0x083CFF,wireframe:true });
const pyro2 = new THREE.Mesh(geometry2, material2);

scene.add(pyro2);



const geometry3 = new THREE.TorusGeometry(2,1,30,70);
const material3 = new THREE.MeshStandardMaterial({ color: 0x083CFF,wireframe:true });
const pyro3 = new THREE.Mesh(geometry3, material3);

scene.add(pyro3);

const geometry4 = new THREE.SphereGeometry(22,100,30,);
const material4 = new THREE.MeshPhysicalMaterial({color: 0x0088FF,wireframe:true});
const pyro4 = new THREE.Mesh(geometry4, material4);

scene.add(pyro4);

// lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


// bg
const poz = new THREE.Color(0x00001)
scene.background = poz;

//positions

const moonTexture = new THREE.TextureLoader().load('https://media0.giphy.com/media/YqhIK6Gbor6CLeloBq/giphy.gif?cid=790b7611629b874ca0fc525066c2e6dd1b0ed4bd29b2265e&rid=giphy.gif&ct=g');
const normalTexture = new THREE.TextureLoader().load('https://media2.giphy.com/media/xUA7bcxpoohklhbWDe/giphy.gif?cid=790b7611e8993055daded2826b52a300945e597f2d8f6c61&rid=giphy.gif&ct=g');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
    wireframe: true
  })
);

scene.add(moon);

moon.position.z = 6;
moon.position.setX(-1);

pyro2.position.z=100;
pyro2.position.x=-1;
pyro2.position.y=-5;

pyro3.position.z=30;
pyro3.position.x=10;
pyro3.position.y=3;

pyro4.position.z=30;
pyro4.position.x=10;
pyro4.position.y=3;

//gltf
//const loader = new GLTFLoader();
//loader.load('sneskooo.gltf', function (gltf) {
//  scene.add(gltf.scene);
//});

//loadGLTF()

// scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  fuck.rotation.y += 0.01;
  fuck.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.02;
  camera.rotation.y = t * -0.002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  pyro.rotation.x += 0.01;
  pyro.rotation.y += 0.005;
  pyro.rotation.z += 0.01;

  pyro2.rotation.x += 0.01;
  pyro2.rotation.y += 0.001;
  pyro2.rotation.z += 0.001;

  pyro3.rotation.x += 0.01;
  pyro3.rotation.y += 0.01;
  pyro3.rotation.z += 0.01;
  pyro4.rotation.x += 0.01;
  pyro4.rotation.y += 0.01;
  pyro4.rotation.z += 0.01;

  moon.rotation.x += 0.003;
  moon.rotation.z += 0.03;

  fuck.rotation.x += 0.03;
  fuck.rotation.y += 0.003;
  fuck.rotation.z += 0.003;


  // controls.update();

  renderer.render(scene, camera);
}

animate();
