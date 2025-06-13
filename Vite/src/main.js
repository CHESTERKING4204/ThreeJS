import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById('canvas');

//Creating the Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('white');

//Add the camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 5;

//Add the object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color:'#468585',emissive:'#468585'});
const dodecahedron = new THREE.Mesh(geometry,material);

const boxGeometry = new THREE.BoxGeometry(2,0.1,2);
const boxMaterail = new THREE.MeshBasicMaterial({color:'#B4B4B3'});
const box = new THREE.Mesh(boxGeometry,boxMaterail);
box.position.y = -1.5;

// const sphereRadius = 0.3;
// const sphereWidthDivisions = 32;
// const sphereHeightDivisions = 16;
// const sphereGeo = new THREE.SphereGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
// const sphereMat = new THREE.MeshPhongMaterial({color: '#CA8'});
// const mesh = new THREE.Mesh(sphereGeo, sphereMat);
// mesh.position.set(1,1,1);

// scene.add(mesh);
scene.add(dodecahedron);
scene.add(box);


//Add the lights
const light = new THREE.SpotLight(0x006769,100);
light.position.set(1,1,1);
scene.add(light);

//Add the renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//Add Orbit Control
const controls = new OrbitControls(camera,renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

//Add animation
function animation(){
    window.requestAnimationFrame(animation);
    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;
    
    box.rotation.y += 0.005;
    
    controls.update();

    renderer.render(scene,camera);
}
animation()



